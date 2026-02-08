# Huda-Nour-Site

مشروع موقع مؤسسة الهدى والنور

## تشغيل محلي

1. ثبت الحزم:

```bash
npm install
```

2. لتشغيل واجهة العميل (Vite):

```bash
npm run dev:client
```

3. لتشغيل السيرفر (إن وُجد):

```bash
npm run dev
```

## إنشاء نسخة ZIP (ويندوز PowerShell)

افتح PowerShell داخل مجلد المشروع وشغّل:

```powershell
Compress-Archive -Path . -DestinationPath ..\huda-nour-site.zip -Force
```

ملاحظة: يفضل استبعاد `node_modules` من الأرشيف. بدلاً من ذلك، استخدم Git وادفع الكود إلى GitHub.

## رفع إلى GitHub (موجز)

```bash
git init
git add .
git commit -m "Initial commit - after updates"
# أنشئ مستودعاً على GitHub ثم
git remote add origin https://github.com/USERNAME/REPO.git
git branch -M main
git push -u origin main
```

ثم يمكنك تنزيل ZIP من صفحة المستودع على GitHub.

---

إذا تحب، أستطيع:
- عمل commit محلي هنا (أحتاج تأكيدك)،
- أو إنشاء ZIP الآن من هذه البيئة وأضعه في المجلد العلوي لتنزله.
