import lodash from 'lodash'
import faker from 'faker'
import chalk from 'chalk'
import initDB, { DB, User, Todo } from './dbInit'

export default async () => {
  console.log(chalk.yellow('\n  - Seeding Database...'))
  faker.seed(123)
  try {
    await initDB()
    console.log(`DB initialized...`)
    await lodash.times(10, async i => {
      console.log(`Creating ${i * 2} rows in DB...`)  
      try {  
        const newUser = await User.create({
          name: faker.name.firstName()
        })
        console.log(chalk.blue(`Created ${i} New User`))
        const newTodo = await newUser.createTodo({
          title: `Post by ${newUser.name}`,
          content: faker.lorem.sentences(3),
          votes: faker.random.number(1000)
        })
        console.log(chalk.green(`Created ${i} New Todo`))
      } catch (err) { 
        console.error(`Error With Seeding Iteration ${i}`) 
      }
    })
  } 
  catch(err) { 
    console.error('Error...Problem Seeding DB.', err) 
  }
}
