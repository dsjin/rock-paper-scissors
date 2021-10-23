export interface IActionButton {
  actionName: string
  color: string
  src: string
  class: string
  action: (value: {
    selectedAction: string,
    visible: boolean
  }) => void
  transition?: any
}