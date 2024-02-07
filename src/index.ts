import { User } from "./models/User";

const user = new User({ name: 'Ola', age: 77 })

user.save()