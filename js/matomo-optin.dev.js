!function(o){var e="allow-matomo-tracking";if(1!=navigator.doNotTrack){var t=a().getItem(e);null===t?setTimeout(function(){o("html").attr("data-"+e,"unknown")},1e3):o("html").attr("data-"+e,"1"===t?"yes":"no"),o(document).on("click",'[name="'+e+'"]',function(t){var n="yes"===o(this).val();a().setItem(e,n?1:0),o("html").attr("data-"+e,n?"yes":"no"),t.preventDefault(),n&&o(document).trigger(e)}).on("click",".matomo-optin-status a.-settings",function(t){o("html").attr("data-"+e,"unknown"),t.preventDefault()})}else o("html").attr("data-"+e,"no");function a(){return window.localStorage?window.localStorage:{setItem:function(t,n){document.cookie=encodeURIComponent(t)+"="+n},getItem:function(n){var o=null;return document.cookie.split(";").filter(function(t){return 0<=t.indexOf(n+"=")&&(o=t.split("=").pop(),!0)}),o}}}}(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdG9tby1vcHRpbi5qcyJdLCJuYW1lcyI6WyIkIiwibmFtZSIsIm5hdmlnYXRvciIsImRvTm90VHJhY2siLCJwcmVzZXQiLCJnZXRfc3RvcmFnZSIsImdldEl0ZW0iLCJzZXRUaW1lb3V0IiwiYXR0ciIsImRvY3VtZW50Iiwib24iLCJlIiwidmFsIiwidGhpcyIsInNldEl0ZW0iLCJwcmV2ZW50RGVmYXVsdCIsInRyaWdnZXIiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJrIiwidiIsImNvb2tpZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInNwbGl0IiwiZmlsdGVyIiwiaXRlbSIsImluZGV4T2YiLCJwb3AiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiJDQUFBLFNBQVVBLEdBRVQsSUFBSUMsRUFBTyx3QkFJWCxHQUE2QixHQUF4QkMsVUFBVUMsV0FBZixDQTJCQSxJQUFJQyxFQUFTQyxJQUFjQyxRQUFRTCxHQUVuQixPQUFYRyxFQUVKRyxXQUFXLFdBQ1ZQLEVBQUUsUUFBUVEsS0FBSyxRQUFRUCxFQUFLLFlBQzFCLEtBRUhELEVBQUUsUUFBUVEsS0FBTSxRQUFVUCxFQUFpQixNQUFYRyxFQUFpQixNQUFRLE1BSTFESixFQUFFUyxVQUNBQyxHQUFHLFFBQVEsVUFBVVQsRUFBSyxLQUFLLFNBQVNVLEdBQ3hDLElBQUlDLEVBQXdCLFFBQWxCWixFQUFFYSxNQUFNRCxNQUNsQlAsSUFBY1MsUUFDYmIsRUFDQVcsRUFBTSxFQUFJLEdBRVhaLEVBQUUsUUFBUVEsS0FBSyxRQUFVUCxFQUFNVyxFQUFNLE1BQVEsTUFDN0NELEVBQUVJLGlCQUNHSCxHQUNKWixFQUFFUyxVQUFVTyxRQUFRZixLQUdyQlMsR0FBRyxRQUFRLG1DQUFtQyxTQUFTQyxHQUN2RFgsRUFBRSxRQUFRUSxLQUFLLFFBQVVQLEVBQU0sV0FDL0JVLEVBQUVJLHdCQXJESGYsRUFBRSxRQUFRUSxLQUFLLFFBQVFQLEVBQUssTUFJN0IsU0FBU0ksSUFDUixPQUFLWSxPQUFPQyxhQUNKRCxPQUFPQyxhQUVSLENBQ05KLFFBQVEsU0FBU0ssRUFBRUMsR0FFbEJYLFNBQVNZLE9BQVNDLG1CQUFtQkgsR0FBRyxJQUFJQyxHQUU3Q2QsUUFBUSxTQUFTYSxHQUNoQixJQUFJQyxFQUFJLEtBUVIsT0FQQVgsU0FBU1ksT0FBT0UsTUFBTSxLQUFLQyxPQUFPLFNBQVNDLEdBQ3ZDLE9BQTRCLEdBQXZCQSxFQUFLQyxRQUFRUCxFQUFFLE9BQ3RCQyxFQUFJSyxFQUFLRixNQUFNLEtBQUtJLE9BQ2IsS0FJRlAsS0E3QlgsQ0ErREdRIiwiZmlsZSI6Im1hdG9tby1vcHRpbi5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCl7XG5cblx0dmFyIG5hbWUgPSAnYWxsb3ctbWF0b21vLXRyYWNraW5nJyxcblx0XHRhbGxvdztcblxuXHQvLyByZXNwZWN0IEROVCBzZXR0aW5nXG5cdGlmICggbmF2aWdhdG9yLmRvTm90VHJhY2sgPT0gMSApIHtcblx0XHQkKCdodG1sJykuYXR0cignZGF0YS0nK25hbWUsJ25vJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0X3N0b3JhZ2UoKSB7XG5cdFx0aWYgKCB3aW5kb3cubG9jYWxTdG9yYWdlICkge1xuXHRcdFx0cmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRzZXRJdGVtOmZ1bmN0aW9uKGssdikge1xuXG5cdFx0XHRcdGRvY3VtZW50LmNvb2tpZSA9IGVuY29kZVVSSUNvbXBvbmVudChrKSsnPScrdjtcblx0XHRcdH0sXG5cdFx0XHRnZXRJdGVtOmZ1bmN0aW9uKGspIHtcblx0XHRcdFx0dmFyIHYgPSBudWxsO1xuXHRcdFx0XHRkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKS5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xuXHRcdFx0XHQgICAgaWYgKCBpdGVtLmluZGV4T2YoaysnPScpID49IDAgKSB7XG5cdFx0XHRcdFx0XHR2ID0gaXRlbS5zcGxpdCgnPScpLnBvcCgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybiB2O1xuXHRcdFx0fSxcblx0XHR9O1xuXHR9XG5cdHZhciBwcmVzZXQgPSBnZXRfc3RvcmFnZSgpLmdldEl0ZW0obmFtZSk7XG5cblx0aWYgKCBwcmVzZXQgPT09IG51bGwgKSB7XG5cdFx0Ly8gd2FpdFxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdCQoJ2h0bWwnKS5hdHRyKCdkYXRhLScrbmFtZSwndW5rbm93bicpXG5cdFx0fSwgMTAwMCApO1xuXHR9IGVsc2Uge1xuXHRcdCQoJ2h0bWwnKS5hdHRyKCAnZGF0YS0nICsgbmFtZSwgcHJlc2V0ID09PSAnMScgPyAneWVzJyA6ICdubycgKTtcblx0fVxuXG5cblx0JChkb2N1bWVudClcblx0XHQub24oJ2NsaWNrJywnW25hbWU9XCInK25hbWUrJ1wiXScsZnVuY3Rpb24oZSl7XG5cdFx0XHR2YXIgdmFsID0gJCh0aGlzKS52YWwoKSA9PT0gJ3llcyc7XG5cdFx0XHRnZXRfc3RvcmFnZSgpLnNldEl0ZW0oXG5cdFx0XHRcdG5hbWUsXG5cdFx0XHRcdHZhbCA/IDEgOiAwXG5cdFx0XHQpO1xuXHRcdFx0JCgnaHRtbCcpLmF0dHIoJ2RhdGEtJyArIG5hbWUsIHZhbCA/ICd5ZXMnIDogJ25vJyApO1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0aWYgKCB2YWwgKSB7XG5cdFx0XHRcdCQoZG9jdW1lbnQpLnRyaWdnZXIobmFtZSk7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHQub24oJ2NsaWNrJywnLm1hdG9tby1vcHRpbi1zdGF0dXMgYS4tc2V0dGluZ3MnLGZ1bmN0aW9uKGUpe1xuXHRcdFx0JCgnaHRtbCcpLmF0dHIoJ2RhdGEtJyArIG5hbWUsICd1bmtub3duJyApO1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH0pXG5cdFx0O1xufSkoalF1ZXJ5KVxuIl19
