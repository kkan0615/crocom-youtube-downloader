import { SequelizeAttributes } from '@/interfaces/model/sequelize'

export type CustomFileType = 'image' | 'video' | 'file'

export interface CustomFile extends File, Blob, SequelizeAttributes {
  fileType: CustomFileType
  fileName: string
  href?: string
}
