
import {
  Resolver, Query, Arg,
} from 'type-graphql'

import { Person, PersonInput } from './schema'

@Resolver()
export default class PersonResolver {
  @Query(
    () => Person,
    // { nullable: true }
  )
  person(
  @Arg('personInput', () => PersonInput) personInput: PersonInput,
  ) {
    const personData = {
      'Peter Lustig': {
        name: 'Peter Lustig',
        tags: ['Developer', 'Germany'],
      },
    }
    return personData[personInput.name]
  }
}
