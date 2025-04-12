import { Dialog } from 'quasar'

const confirmationAlert = (
  title = '',
  message = '',
  onAccept = () => {},
  onReject = () => {}
) => Dialog.create({
  title,
  message,
  cancel: true,
  dark: true
})
  .onOk(onAccept)
  .onCancel(onReject)
  .onDismiss(onReject)

export { confirmationAlert }
