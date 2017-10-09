var myJQuery = $;

var lastMainStatus = undefined;
var lastMainName = undefined;
var mainStop = false;

var main = function () {

   if (mainStop) {
      return;
   }

   var spanName   = myJQuery('#main div.chat-body div.chat-main span');
   var spanStatus = myJQuery('#main div.chat-body div._3sgkv.Gd51Q span');

   var name = spanName.textContent;
   var open = false;

   if (lastMainName != name) {
      open = true;
      lastMainName = name;
      lastMainStatus = undefined;
   }

   var status = lastMainStatus;

   if (spanStatus) {
      status = spanStatus.textContent;
   } else {
      status = 'offline';
   }

   if (status != lastMainStatus) {
      var d = new Date();
      if (open) {
         console.log('!>', name, '-', d.toLocaleTimeString(), '-', status);
      } else {
         console.log('*>', name, '-', d.toLocaleTimeString(), '-', status);
      }
      lastMainStatus = status;
   }
}

var mainForEver = function () {
   main();
   setTimeout(mainForEver, 100);
}

var mainRun = function () {
   setTimeout(mainForEver, 100);
}
