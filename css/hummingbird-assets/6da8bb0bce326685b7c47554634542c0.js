/**handles:convertkit-js**/
function convertKitTagSubscriber(e,o,t){var n;convertkit.debug&&(console.log("convertKitTagSubscriber"),console.log(convertkit),console.log(e),console.log(o),console.log(t)),(n=jQuery).ajax({type:"POST",data:{action:"convertkit_tag_subscriber",convertkit_nonce:convertkit.nonce,subscriber_id:e,tag:o,post_id:t},url:convertkit.ajaxurl,success:function(e){convertkit.debug&&console.log(e),convertKitRemoveSubscriberIDFromURL(window.location.href)}}).fail(function(e){convertkit.debug&&console.log(e),convertKitRemoveSubscriberIDFromURL(window.location.href)})}function convertStoreSubscriberIDInCookie(e){var o;convertkit.debug&&(console.log("convertStoreSubscriberIDInCookie"),console.log(e)),(o=jQuery).ajax({type:"POST",data:{action:"convertkit_store_subscriber_id_in_cookie",convertkit_nonce:convertkit.nonce,subscriber_id:e},url:convertkit.ajaxurl,success:function(e){convertkit.debug&&console.log(e),convertKitRemoveSubscriberIDFromURL(window.location.href)}}).fail(function(e){convertkit.debug&&console.log(e),convertKitRemoveSubscriberIDFromURL(window.location.href)})}function convertStoreSubscriberEmailAsIDInCookie(e){var o;convertkit.debug&&(console.log("convertStoreSubscriberEmailAsIDInCookie"),console.log(e)),(o=jQuery).ajax({type:"POST",data:{action:"convertkit_store_subscriber_email_as_id_in_cookie",convertkit_nonce:convertkit.nonce,email:e},url:convertkit.ajaxurl,success:function(e){convertkit.debug&&console.log(e)}}).fail(function(e){convertkit.debug&&console.log(e)})}function convertKitRemoveSubscriberIDFromURL(e){var o=e.substring(0,e.indexOf("?ck_subscriber_id")),e=document.getElementsByTagName("title")[0].innerHTML;o&&window.history.pushState(null,e,o)}function convertKitSleep(e){for(var o=(new Date).getTime(),t=0;t<1e7&&!((new Date).getTime()-o>e);t++);}jQuery(document).ready(function(t){0<convertkit.subscriber_id&&convertkit.tag&&convertkit.post_id?convertKitTagSubscriber(convertkit.subscriber_id,convertkit.tag,convertkit.post_id):0<convertkit.subscriber_id&&convertStoreSubscriberIDInCookie(convertkit.subscriber_id),t(document).on("click",".formkit-submit",function(){var e=t('input[name="email_address"]').val(),o;e.length?/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.toLowerCase())?(convertKitSleep(2e3),convertStoreSubscriberEmailAsIDInCookie(e)):convertkit.debug&&console.log("email not an email address"):convertkit.debug&&console.log("email empty")})});