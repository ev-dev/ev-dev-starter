import { isForceSyncDB } from '.'
import { DB, User, Todo } from '../db/models'

export default async (force=isForceSyncDB) => {
  let syncedDB
  try {
    syncedDB = await DB.sync({ force })
    if (syncedDB == undefined) throw new Error(`Error at the end of syncing DB. syncedDb: ${syncedDB}`)
    else return syncedDB
  } catch (err) {
    console.error('Problem connecting to associations inside sync', err)
  }
}

export { DB, User, Todo }