!function(o){var e="allow-matomo-tracking";function a(){return window.localStorage?window.localStorage:{setItem:function(t,n){document.cookie=encodeURIComponent(t)+"="+n},getItem:function(n){var o=null;return document.cookie.split(";").filter(function(t){return 0<=t.indexOf(n+"=")&&(o=t.split("=").pop(),!0)}),console.log(o),o}}}var t=a().getItem(e);console.log(t),null===t?setTimeout(function(){o("html").attr("data-"+e,"unknown")},1e3):o("html").attr("data-"+e,"1"===t?"yes":"no"),o(document).on("click",'[name="'+e+'"]',function(t){var n="yes"===o(this).val();a().setItem(e,n?1:0),o("html").attr("data-"+e,n?"yes":"no"),t.preventDefault(),n&&o(document).trigger(e)}).on("click",".matomo-optin-status a.-settings",function(t){o("html").attr("data-"+e,"unknown"),t.preventDefault()})}(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdG9tby1vcHRpbi5qcyJdLCJuYW1lcyI6WyIkIiwibmFtZSIsImdldF9zdG9yYWdlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImsiLCJ2IiwiZG9jdW1lbnQiLCJjb29raWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJnZXRJdGVtIiwic3BsaXQiLCJmaWx0ZXIiLCJpdGVtIiwiaW5kZXhPZiIsInBvcCIsImNvbnNvbGUiLCJsb2ciLCJwcmVzZXQiLCJzZXRUaW1lb3V0IiwiYXR0ciIsIm9uIiwiZSIsInZhbCIsInRoaXMiLCJwcmV2ZW50RGVmYXVsdCIsInRyaWdnZXIiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiJDQUFBLFNBQVVBLEdBRVQsSUFBSUMsRUFBTyx3QkFHWCxTQUFTQyxJQUNSLE9BQUtDLE9BQU9DLGFBQ0pELE9BQU9DLGFBRVIsQ0FDTkMsUUFBUSxTQUFTQyxFQUFFQyxHQUVsQkMsU0FBU0MsT0FBU0MsbUJBQW1CSixHQUFHLElBQUlDLEdBRTdDSSxRQUFRLFNBQVNMLEdBQ2hCLElBQUlDLEVBQUksS0FTUixPQVJBQyxTQUFTQyxPQUFPRyxNQUFNLEtBQUtDLE9BQU8sU0FBU0MsR0FDdkMsT0FBNEIsR0FBdkJBLEVBQUtDLFFBQVFULEVBQUUsT0FDdEJDLEVBQUlPLEVBQUtGLE1BQU0sS0FBS0ksT0FDYixLQUlUQyxRQUFRQyxJQUFJWCxHQUNMQSxJQUlWLElBQUlZLEVBQVNqQixJQUFjUyxRQUFRVixHQUNuQ2dCLFFBQVFDLElBQUlDLEdBQ0ksT0FBWEEsRUFFSkMsV0FBVyxXQUNWcEIsRUFBRSxRQUFRcUIsS0FBSyxRQUFRcEIsRUFBSyxZQUMxQixLQUVIRCxFQUFFLFFBQVFxQixLQUFNLFFBQVVwQixFQUFpQixNQUFYa0IsRUFBaUIsTUFBUSxNQUkxRG5CLEVBQUVRLFVBQ0FjLEdBQUcsUUFBUSxVQUFVckIsRUFBSyxLQUFLLFNBQVNzQixHQUN4QyxJQUFJQyxFQUF3QixRQUFsQnhCLEVBQUV5QixNQUFNRCxNQUNsQnRCLElBQWNHLFFBQ2JKLEVBQ0F1QixFQUFNLEVBQUksR0FFWHhCLEVBQUUsUUFBUXFCLEtBQUssUUFBVXBCLEVBQU11QixFQUFNLE1BQVEsTUFDN0NELEVBQUVHLGlCQUNHRixHQUNKeEIsRUFBRVEsVUFBVW1CLFFBQVExQixLQUdyQnFCLEdBQUcsUUFBUSxtQ0FBbUMsU0FBU0MsR0FDdkR2QixFQUFFLFFBQVFxQixLQUFLLFFBQVVwQixFQUFNLFdBQy9Cc0IsRUFBRUcsbUJBdkRMLENBMERHRSIsImZpbGUiOiJtYXRvbW8tb3B0aW4uZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpe1xuXG5cdHZhciBuYW1lID0gJ2FsbG93LW1hdG9tby10cmFja2luZycsXG5cdFx0YWxsb3c7XG5cblx0ZnVuY3Rpb24gZ2V0X3N0b3JhZ2UoKSB7XG5cdFx0aWYgKCB3aW5kb3cubG9jYWxTdG9yYWdlICkge1xuXHRcdFx0cmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRzZXRJdGVtOmZ1bmN0aW9uKGssdikge1xuXG5cdFx0XHRcdGRvY3VtZW50LmNvb2tpZSA9IGVuY29kZVVSSUNvbXBvbmVudChrKSsnPScrdjtcblx0XHRcdH0sXG5cdFx0XHRnZXRJdGVtOmZ1bmN0aW9uKGspIHtcblx0XHRcdFx0dmFyIHYgPSBudWxsO1xuXHRcdFx0XHRkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKS5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xuXHRcdFx0XHQgICAgaWYgKCBpdGVtLmluZGV4T2YoaysnPScpID49IDAgKSB7XG5cdFx0XHRcdFx0XHR2ID0gaXRlbS5zcGxpdCgnPScpLnBvcCgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHYpXG5cdFx0XHRcdHJldHVybiB2O1xuXHRcdFx0fSxcblx0XHR9O1xuXHR9XG5cdHZhciBwcmVzZXQgPSBnZXRfc3RvcmFnZSgpLmdldEl0ZW0obmFtZSk7XG5cdGNvbnNvbGUubG9nKHByZXNldClcblx0aWYgKCBwcmVzZXQgPT09IG51bGwgKSB7XG5cdFx0Ly8gd2FpdFxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdCQoJ2h0bWwnKS5hdHRyKCdkYXRhLScrbmFtZSwndW5rbm93bicpXG5cdFx0fSwgMTAwMCApO1xuXHR9IGVsc2Uge1xuXHRcdCQoJ2h0bWwnKS5hdHRyKCAnZGF0YS0nICsgbmFtZSwgcHJlc2V0ID09PSAnMScgPyAneWVzJyA6ICdubycgKTtcblx0fVxuXG5cblx0JChkb2N1bWVudClcblx0XHQub24oJ2NsaWNrJywnW25hbWU9XCInK25hbWUrJ1wiXScsZnVuY3Rpb24oZSl7XG5cdFx0XHR2YXIgdmFsID0gJCh0aGlzKS52YWwoKSA9PT0gJ3llcyc7XG5cdFx0XHRnZXRfc3RvcmFnZSgpLnNldEl0ZW0oXG5cdFx0XHRcdG5hbWUsXG5cdFx0XHRcdHZhbCA/IDEgOiAwXG5cdFx0XHQpO1xuXHRcdFx0JCgnaHRtbCcpLmF0dHIoJ2RhdGEtJyArIG5hbWUsIHZhbCA/ICd5ZXMnIDogJ25vJyApO1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0aWYgKCB2YWwgKSB7XG5cdFx0XHRcdCQoZG9jdW1lbnQpLnRyaWdnZXIobmFtZSk7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHQub24oJ2NsaWNrJywnLm1hdG9tby1vcHRpbi1zdGF0dXMgYS4tc2V0dGluZ3MnLGZ1bmN0aW9uKGUpe1xuXHRcdFx0JCgnaHRtbCcpLmF0dHIoJ2RhdGEtJyArIG5hbWUsICd1bmtub3duJyApO1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH0pXG5cdFx0O1xufSkoalF1ZXJ5KVxuIl19
