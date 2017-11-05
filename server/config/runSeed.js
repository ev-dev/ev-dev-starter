import { seedDB } from '.'

try {
  seedDB()
} catch (err) {
  console.error('Error while runSeed processed', err)
}