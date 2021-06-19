import * as validator from 'class-validator';

import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class NumberArrayPipe implements PipeTransform<Array<unknown>> {
  async transform(value: unknown) {
    if (!Array.isArray(value)) {
      throw new BadRequestException('Expecting an array');
    }

    const isValid = value.every((el) =>
      validator.isNumber(el, {
        allowNaN: false,
        allowInfinity: false,
      }),
    );

    if (!isValid) {
      throw new BadRequestException('Expecting an array of numbers');
    }

    return value;
  }
}
