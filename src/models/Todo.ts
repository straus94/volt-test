export interface TodoModel {
  id: string
  title: string
  status: boolean
}

export enum TodoStatusEnum {
  PROCESS = 'process',
  DONE = 'done',
}