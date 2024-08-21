// public/service-worker.js
self.addEventListener("install", (event) => {
  console.log("Service Worker installed");
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activated");
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  if (event.action === "accept") {
    clients.openWindow("/accept");
  } else if (event.action === "decline") {
    clients.openWindow("/decline");
  } else {
    clients.openWindow("/");
  }
});
