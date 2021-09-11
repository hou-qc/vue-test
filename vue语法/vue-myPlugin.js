(function (window) {
    const MyPlugin = {};
    // 插件对象必须有一个install方法
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或 property
        //给Vue添加工具/静态方法
        Vue.myGlobalMethod = function () {
            // 逻辑...
            console.log('Vue.myGlobalMethod');
        }

        // 2. 添加全局资源
        // 定义全局指令
        Vue.directive('my-directive', {
            bind(el, binding, vnode, oldVnode) {
                // 逻辑...
                el.innerText = binding.value;
            }

        })

        // 3. 注入组件选项
        // Vue.mixin({
        //     created: function () {
        //         // 逻辑...
        //     }

        // })

        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
            // 逻辑...
            console.log('vm.$myMethod()');
        }
    }
    window.MyPlugin = MyPlugin;
})(window)