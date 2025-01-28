importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"393ae9f654bf17d41e9ca21cd7ab2242","url":"contributors.html"},{"revision":"a4bd32f40207cc663a11060412eebfb8","url":"feedback.html"},{"revision":"e4fab7f7133bade1b8e7ab0e487d112c","url":"images/fig1.jpg"},{"revision":"4ce09bac7411b7fc600520c238d19ef2","url":"images/fig1.pdf1.jpg"},{"revision":"4e3150c6de11880afb280b4c063a0493","url":"images/fig1.pdf2.jpg"},{"revision":"cb0b875d8bc6b5897bc2b4ec343f8fff","url":"images/procedure.002.png"},{"revision":"f8c08bd175d3c1d53a4d2cf95062e3f6","url":"images/procedure.003.png"},{"revision":"9afd4ddba8fb45bfb12ef3c1c0c2bdb4","url":"images/procedure.004.png"},{"revision":"0b60461baf57afb195b6bf2c1fb3b83d","url":"images/procedure.005.png"},{"revision":"ec8ef535ce5f6e190c49a06bddf8a3db","url":"images/procedure.006.png"},{"revision":"4d7a94ebbd5b797802991e5cb36566c2","url":"images/procedure.007.png"},{"revision":"2a4beb64928790536f2090bba70657d4","url":"images/procedure.008.png"},{"revision":"d24f3a92296fecc9dce4e96dd2906d19","url":"images/procedure.009.png"},{"revision":"2576c8000fdd86f984e51d7c05463cae","url":"images/procedure.010.png"},{"revision":"0339e93194872613e71790513e96137e","url":"images/procedure.011.png"},{"revision":"92ce361bb8bdd2c0e4952e4b4e9188bb","url":"images/procedure.012.png"},{"revision":"a53fcd85e304027d2a070752061e3639","url":"images/procedure.013.png"},{"revision":"ebf285e63579965cebb8362f991c0dbb","url":"images/procedure.014.png"},{"revision":"ce221ce161bc849a8b740a0c2c960b08","url":"images/procedure.015.png"},{"revision":"01128c7e9723575790b3ccee6a625bee","url":"images/procedure.016.png"},{"revision":"78b3b98fb4e37277f42fd2f845d75a19","url":"images/procedure.017.png"},{"revision":"04f03de0b6265a7a8dafd59b5803796d","url":"images/procedure.018.png"},{"revision":"227de33757b5daae112b5081f8256459","url":"images/procedure.019.png"},{"revision":"453f4ea7324a204d83af2737a410eef4","url":"images/procedure.020.png"},{"revision":"9c50081c8219f83d00f8337d291fd649","url":"images/procedure.021.png"},{"revision":"5a18527c6b9611f8142b221aed13e4c5","url":"images/procedure.022.png"},{"revision":"0b047988fd9dd07edabaf9f10b178e49","url":"images/procedure.023.png"},{"revision":"4597c00ff3d46f14b4c9d5b1bbdbf357","url":"images/procedure.024.png"},{"revision":"67bd2c3e9f1dcec6d92d5a39c4609a64","url":"images/procedure.025.png"},{"revision":"1242b4a8d4e6c7f40f35984742e27951","url":"images/procedure.026.png"},{"revision":"fe444322c44a9e9b61c40ba3c3d8bebc","url":"images/procedure.027.png"},{"revision":"90d077ef308cc3187d6498aa95e9c9e7","url":"images/step1.png"},{"revision":"6220dcdcb9767ea01b53a880dfd11880","url":"images/step10.png"},{"revision":"86d5c78d625bb11a33642e153617d3af","url":"images/step2.png"},{"revision":"8dd8169d3e91ff5758e819bebca1371b","url":"images/step3.png"},{"revision":"0261e3a49ede319680a34f8eeb363786","url":"images/step4.png"},{"revision":"53c3f6bb42056f09e3efc803fb1642a6","url":"images/step5.png"},{"revision":"c8196345d61ec15753581dbf80da21f1","url":"images/step6.png"},{"revision":"e8cf257e1f781720c20314ad1c7599ba","url":"images/step7.png"},{"revision":"6bad7385d5f9514277fcfe1700b47392","url":"images/step8.png"},{"revision":"d0effd7a7f0607d513524f81835c6139","url":"images/step9.png"},{"revision":"16d484b2896a4014928767a5f6dc9bd2","url":"images/theory.002.png"},{"revision":"8d5bd3b915cc0538e4a1eb46b832688c","url":"images/theory.003.png"},{"revision":"1d79425f70ad2acaf1e17bebe19523d7","url":"images/theory.004.png"},{"revision":"908a983a1fc72f6442b1c16a819a22ac","url":"images/theory.005.png"},{"revision":"16d37539f5beb349f0942bfcf4a894c3","url":"images/theory.006.png"},{"revision":"279c70bc6975c78a7cc905f90ab1a196","url":"images/theory.007.png"},{"revision":"7603cea16a6d07c0246c9f72e77e231b","url":"index.html"},{"revision":"95bf0180f47af196f8503b48a136293a","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"a0fe942b496e2b1eb955629b8186997d","url":"posttest.html"},{"revision":"48848204e6c2e177113b033d430d970d","url":"posttest.json"},{"revision":"4688f2d6201efc133ff9411e0832bc01","url":"pretest.html"},{"revision":"20d66cee52e121bce00f58675c52de38","url":"pretest.json"},{"revision":"4d25fc030f230c8ba9d536456d950a30","url":"procedure.html"},{"revision":"f22b74485757f3702e985516c9d5940d","url":"references.html"},{"revision":"9e4eb3591a5e467c871f7b8db27b1b93","url":"simulation.html"},{"revision":"199bda46ae46ec95f5ab4391e7ec3a64","url":"simulation/common_libraries/css/style.css"},{"revision":"39445a9b72b8cd276fcd7a0e85f14b05","url":"simulation/common_libraries/js/ts_components/collapse_step.js"},{"revision":"f14f7f2e8038186a9bcd65961f911b29","url":"simulation/common_libraries/js/ts_components/geometry.js"},{"revision":"78930881cdb527fa7e809f14d6ae2ede","url":"simulation/common_libraries/js/ts_components/matrix.js"},{"revision":"4535ea022f115cef58492aa71ab62cc1","url":"simulation/common_libraries/js/ts_components/pannel.js"},{"revision":"9230278de718c3e2a5d9f2f87390de5c","url":"simulation/common_libraries/js/ts_components/questions.js"},{"revision":"1e29160b9e25358aa129e2ba76c57f3f","url":"simulation/common_libraries/js/ts_components/scene.js"},{"revision":"20967a9be8a62c5c9d1c3e8d7e330f8d","url":"simulation/common_libraries/js/ts_components/tables.js"},{"revision":"e3aee782fc14a2310cdffd083fdfce8f","url":"simulation/common_libraries/js/ts_math_library/general_math_functions.js"},{"revision":"75c1b6ecc7b07770bdc2e4692bb4d941","url":"simulation/common_libraries/js/ts_math_library/regression.js"},{"revision":"7e49bc276244b7d39353a6a67114b541","url":"simulation/common_libraries/math.ob.js"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"3d939e2ce8ee90f7afbc5d15bfa3c22f","url":"simulation/images/distribution.png"},{"revision":"f764786a4ca6785b82c7e74ce11692b3","url":"simulation/index.html"},{"revision":"4ffa196845b495a0fff574988ef7e140","url":"simulation/js/activity1.js"},{"revision":"c2d4defcaf949b86ea11b872a09d5159","url":"simulation/js/activity2.js"},{"revision":"876b2d6bc9f07049c6ffce6d0265d461","url":"simulation/js/activity3.js"},{"revision":"2c6c0f29e893cfabca0100c432fc258f","url":"simulation/js/data.js"},{"revision":"3036faea9b8fc516fe9347244d7eb4f1","url":"simulation/js/euler.js"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"2949a0a675e0e2a3c0623669d658936e","url":"simulation/js/screen_size.js"},{"revision":"2eaa8d8fe1a1a86ca798c9478dec535d","url":"theory.html"},{"revision":"7b22c5478c23c6082f285b70d616a621","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );