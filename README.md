# Whatsapp Web Stalker

You can stalk your *Whatsapp Web* main conversation window (1) by copying the
content of the file [whatsappWebMainWindowStalker.js](https://raw.githubusercontent.com/fefas/whatsapp-web-stalker/master/whatsappWebMainWindowStalker.js)
and (2) pasting it into your browser Javascript console.

Then, you need to run the follow command to become a *Whatsapp Web* stalker:

```js
mainRun();
```

The status log of the people of your main conversation windows will look like:

```
!> Felipe Martins - 00:07:21 - offline
   Felipe Martins - 00:07:42 - online
   Felipe Martins - 00:07:48 - writing...
   Felipe Martins - 00:07:50 - online
   Felipe Martins - 00:07:52 - offline
```

When you want to stop stalking, you can run:

```js
mainStop = true;
```
