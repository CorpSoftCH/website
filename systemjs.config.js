System.config({
    transpiler: 'typescript',
    typescriptOptions: {emitDecoratorMetadata: true},
    map: {
        '@angular': 'node_modules/@angular',
        'ng2-page-scroll/ng2-page-scroll': 'node_modules/ng2-page-scroll',
        
    },
    paths: {
        'node_modules/@angular/*': 'node_modules/@angular/*/bundles',
        'node_modules/ng2-page-scroll/*': 'node_modules/*'
    },
    meta: {
        '@angular/*': {'format': 'cjs'}
    },
    packages: {
        'app'                              : {main: 'main', defaultExtension: 'ts'},
        '@angular/core'                    : {main: 'core.umd.min.js'},
        '@angular/common'                  : {main: 'common.umd.min.js'},
        '@angular/compiler'                : {main: 'compiler.umd.min.js'},
        '@angular/platform-browser'        : {main: 'platform-browser.umd.min.js'},
        '@angular/platform-browser-dynamic': {main: 'platform-browser-dynamic.umd.min.js'},
        '@angular/router'                  : {main: 'router.umd.min.js'},
        '@angular/http'                    : {main: 'http.umd.min.js'},
        'ng2-page-scroll'                  : {main: 'ng2-page-scroll/bundles/ng2-page-scroll.umd.js'}
        
    }
});