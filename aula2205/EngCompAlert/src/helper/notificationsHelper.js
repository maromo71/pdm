// src/helper/notificationsHelper.js
import * as Notifications from 'expo-notifications';

// Configuração: Permitir som e alerta mesmo com app aberto
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

// Função para pedir permissão (Necessário para Local Notification também)
export async function registerForLocalNotificationsAsync() {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    alert('Sem permissão para notificações!');
    return false;
  }
  return true;
}

// Função que dispara o alerta no próprio celular
export async function triggerLocalNotification(title, body) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: title,
      body: body,
      sound: true,
    },
    trigger: null, // null = Disparar agora mesmo
  });
}