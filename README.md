# حزمة نشر موقع السلطان على GitHub Pages

**الحالة: جاهزة للمراجعة محليًا؛ لم تُرفع إلى GitHub ولم تُفعّل GitHub Pages.**

المستودع المستهدف: `ghashmova3-crypto/ismailovich` — الفرع: `main`.
أُعدّت الحزمة اعتمادًا على وصف صاحب الطلب لحالة المستودع؛ لم يُعد فحصه في هذه المهمة.

## التغييرات المعدّة

- تحويل محتوى `alsultan.html` إلى صفحة الدخول `index.html` مع الحفاظ على المحتوى والشعار والألوان وRTL والتفاعلات الأصلية.
- استخراج 23 صورة فريدة إلى `assets/images/` دون إعادة ضغط أو تغيير البايتات؛ إعادة استخدام الملفات للصور المكررة.
- استخراج خطي Cairo المضمّنين إلى `assets/fonts/` مع الإبقاء على تعريفات الوزن 400 و700 كما في الأصل.
- فصل CSS وJavaScript إلى ملفات محلية، واستخدام مسارات نسبية تعمل تحت `/ismailovich/`.
- إبقاء `alsultan.html` صفحة تحويل نسبية إلى الرئيسية، تحفظ معاملات الرابط واسم القسم (`?query#section`). دون JavaScript يتوفر رابط يدوي للرئيسية.
- إضافة صفحة `404.html` مع رابط رجوع صريح إلى `/ismailovich/`، ليعمل أيضًا عند أخطاء المسارات المتداخلة.
- إضافة `.nojekyll` لخدمة الملفات الثابتة دون معالجة Jekyll.

## الملفات التي ستوضع في جذر المستودع

| المسار | الوظيفة |
|---|---|
| `index.html` | صفحة الموقع الرئيسية المطلوبة للعرض من الجذر |
| `alsultan.html` | توافق الرابط القديم والتحويل إلى الرئيسية |
| `404.html` | صفحة الرابط غير الموجود |
| `.nojekyll` | تجاوز معالجة Jekyll |
| `assets/css/site.css` | تنسيق الموقع الأصلي |
| `assets/js/site.js` | القائمة والفلترة ومعرض الصور والانتقالات الأصلية |
| `assets/fonts/cairo-400.woff` | الخط المضمّن لتعريف الوزن 400 |
| `assets/fonts/cairo-700.woff` | الخط المضمّن لتعريف الوزن 700 |
| `assets/images/logo.png` | الشعار الأصلي |
| `assets/images/image-02.webp` إلى `image-23.webp` | 22 صورة أصلية |
| `README.md` | تعليمات النشر والمراجعة |
| `VALIDATION.md` | نتائج الفحص وحدوده |
| `SHA256SUMS.txt` | بصمات ملفات الحزمة، باستثناء ملف البصمات ذاته |

لا تحتاج الحزمة إلى npm أو build أو خادم أو أسرار أو ملف GitHub Actions. لا تضف CNAME ما لم يُطلب نطاق خاص.

## الخطة بعد اعتماد الملفات

1. فك ضغط الحزمة. ضع **محتويات** مجلد `alsultan-pages` في جذر المستودع على `main`، وليس المجلد نفسه. تأكد من تضمين الملف المخفي `.nojekyll`، ولا ترفع ZIP بدل محتوياته.
2. راجع الملفات والفروق الموجودة فعليًا قبل commit، مع إبقاء أي ملفات سابقة غير مرتبطة بهذه الحزمة. إذا ظهرت ملفات قائمة بعد الفحص الجديد، قارنها قبل استبدالها.
3. أنشئ commit مثل `Prepare Alsultan static site for GitHub Pages` ثم ارفعه إلى `main` بعد الموافقة.
4. افتح إعدادات Pages:
   https://github.com/ghashmova3-crypto/ismailovich/settings/pages
5. اختر `Source: Deploy from a branch` ثم `Branch: main` ثم `Folder: /(root)` واضغط `Save`.
6. تابع عملية النشر من تبويب Actions حتى تنجح. استخدم رابط Visit site الذي يعرضه GitHub لتأكيد عنوان النشر الفعلي؛ الروابط أدناه متوقعة بافتراض عدم وجود نطاق مخصص.
7. اختبر الرئيسية، وفلترة الأعمال، وفتح الصور والتنقل بينها، والقائمة على الجوال، ورابط `alsultan.html#collection`، وصفحة 404.

مرجع إعداد النشر: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
مرجع صفحة الدخول و`.nojekyll`: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## روابط العرض المتوقعة بعد النشر

هذه روابط مستهدفة، وليست إثباتًا أن الموقع منشور الآن:

| الغرض | الرابط |
|---|---|
| الرئيسية | https://ghashmova3-crypto.github.io/ismailovich/ |
| صفحة الدخول الصريحة | https://ghashmova3-crypto.github.io/ismailovich/index.html |
| رابط الاسم السابق | https://ghashmova3-crypto.github.io/ismailovich/alsultan.html |
| معرض الأعمال | https://ghashmova3-crypto.github.io/ismailovich/#collection |
| عن السلطان | https://ghashmova3-crypto.github.io/ismailovich/#about |
| اختبار الرابط غير الموجود | https://ghashmova3-crypto.github.io/ismailovich/nonexistent-check |
| المستودع | https://github.com/ghashmova3-crypto/ismailovich |

روابط GitHub التي تحتوي على `/blob/` مخصّصة لاستعراض الشيفرة وليست لعرض الموقع.

## المعاينة قبل الرفع

من داخل مجلد `alsultan-pages` شغّل:

```sh
python3 -m http.server 8000
```

ثم افتح `http://localhost:8000/` في المتصفح. اضغط Ctrl+C لإيقاف الخادم.
هذه المعاينة مناسبة للرئيسية وملفاتها؛ مسارات صفحة 404 مصمّمة لمسار GitHub Pages النهائي `/ismailovich/`.

## حدود المراجعة

تحققت سلامة المسارات والملفات والأصول والنصوص البرمجية فحصًا محليًا؛ لم يُجر اختبار بصري أو تفاعلي بالمتصفح، ولم يُنفذ push أو commit أو تعديل لإعدادات GitHub. راجع `VALIDATION.md` للتفاصيل.
