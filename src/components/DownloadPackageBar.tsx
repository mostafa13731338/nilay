import React, { useState } from 'react';

export const DownloadPackageBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const directUrl = `${window.location.origin}/nilay-trade-final.zip`;

  const handleDownload = async () => {
    try {
      setDownloading(true);
      setErrorMsg('');
      
      const response = await fetch('/nilay-trade-final.zip');
      if (!response.ok) {
        throw new Error(`خطای سرور: ${response.status}`);
      }
      
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'nilay-trade-final.zip';
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      setTimeout(() => {
        window.URL.revokeObjectURL(downloadUrl);
        document.body.removeChild(link);
      }, 100);

      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 5000);
    } catch (err: any) {
      console.error('Download error:', err);
      // Fallback: direct window location
      window.location.href = '/nilay-trade-final.zip';
      setErrorMsg('در صورت عدم شروع خودکار، روی لینک کمکی کلیک کنید.');
    } finally {
      setDownloading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-50 bg-[#071D35] text-white px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 border border-[#C6A869]/50 hover:bg-[#0A2540] transition-all text-xs font-bold"
        dir="rtl"
        title="دریافت فایل زیپ سورس‌کد"
      >
        <span className="text-base">📦</span>
        <span>دانلود سورس‌کد (ZIP)</span>
      </button>
    );
  }

  return (
    <aside
      aria-label="بسته دانلود سورس‌کد نهایی"
      className="fixed bottom-4 inset-x-4 md:inset-x-auto md:left-6 md:max-w-md z-50 bg-[#071D35] text-white rounded-2xl shadow-2xl border-2 border-[#C6A869] p-4.5 transition-all animate-bounce-once"
      dir="rtl"
    >
      <div className="flex items-start justify-between gap-3 mb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#C6A869]/20 flex items-center justify-center text-lg">
            📦
          </div>
          <div>
            <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
              دانلود سورس‌کد کامل سایت
              <span className="text-[10px] bg-[#C6A869] text-[#071D35] font-black px-1.5 py-0.5 rounded">
                نسخه نهایی
              </span>
            </h4>
            <p className="text-[11px] text-gray-300">
              حجم: ۳.۳ مگابایت • آماده برای Netlify
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors text-sm"
          title="بستن کادر"
        >
          ✕
        </button>
      </div>

      <p className="text-xs text-gray-200 mb-3 leading-relaxed">
        برای دانلود بدون مشکل، روی دکمه زیر کلیک کنید تا فایل مستقیماً روی سیستم شما ذخیره شود:
      </p>

      <div className="flex flex-col gap-2">
        <button
          onClick={handleDownload}
          disabled={downloading}
          className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all ${
            downloadSuccess
              ? 'bg-emerald-600 text-white'
              : 'bg-[#C6A869] hover:bg-[#b59758] text-[#071D35] active:scale-[0.99]'
          } ${downloading ? 'opacity-70 cursor-wait' : ''}`}
        >
          {downloading ? (
            <>
              <svg className="animate-spin h-4 w-4 text-[#071D35]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
              <span>در حال دریافت فایل...</span>
            </>
          ) : downloadSuccess ? (
            <>
              <span>✓ دانلود آغاز شد!</span>
            </>
          ) : (
            <>
              <span className="text-sm">⬇️</span>
              <span>دانلود مستقیم فایل زیپ (nilay-trade-final.zip)</span>
            </>
          )}
        </button>

        <div className="flex items-center justify-between text-[11px] text-gray-300 pt-1 border-t border-white/10">
          <a
            href={directUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C6A869] hover:underline flex items-center gap-1"
          >
            <span>🔗 لینک دانلود در تب جدید</span>
          </a>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:text-white underline"
          >
            بستن کادر
          </button>
        </div>
      </div>

      {errorMsg && (
        <p className="text-amber-300 text-[11px] mt-2 font-medium">
          {errorMsg}
        </p>
      )}
    </aside>
  );
};
