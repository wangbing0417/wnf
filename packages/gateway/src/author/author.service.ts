import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthorService {
  findOneById(id: number) {
    const persons = [
      { id: 1, firstName: '张', lastName: '三丰' },
      {
        id: 2,
        firstName: '梅',
        lastName: '超风'
      },
      {
        id: 3,
        firstName: '王',
        lastName: '富贵'
      }
    ]
    return persons.find((person) => person.id === id)
  }

  getSalary(city: string) {
    if (city === 'shanghai') {
      return 400000
    } else if (city === 'beijing') {
      return 500000
    } else {
      return 10
    }
  }
}
