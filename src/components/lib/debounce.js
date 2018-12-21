/* eslint-disable */
const debounce = function debounce (fn, delay) {
    var timeoutID = null
    return function () {
      clearTimeout(timeoutID)
      var args = arguments
      var that = this
      timeoutID = setTimeout(function () {
        fn.apply(that, args)
      }, delay)
    }
  }
  
  directive.debounce = debounce
  
  function directive (el, binding) {
    if (binding.value !== binding.oldValue) { // change debounce only if interval has changed
      el.oninput = directive.debounce(function (evt) {
        el.dispatchEvent(new Event('change'))
      }, parseInt(binding.value) || 500)
    }
  }
  
  module.exports = directive
  