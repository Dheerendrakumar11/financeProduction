import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {userSelect} from 'sanity-plugin-user-select-input'

export default defineConfig({
  name: 'default',
  title: 'Sanity WordPress',

  projectId: 'l0ay2hgi',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), userSelect()],

  schema: {
    types: schemaTypes,
  },
})
