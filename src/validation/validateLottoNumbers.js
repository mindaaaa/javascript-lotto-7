import { getWinningNumbers, getBonusNumber } from '../utils/getUserInput';
import { Console } from '@woowacourse/mission-utils';

export default async function validateLottotNumbers() {
  await getValidateWinningNumbers();
}

async function getValidateWinningNumbers() {
  try {
    const winningNumbers = await getWinningNumbers();
    const parsedWinningNumbers = validateSixNumbers(winningNumbers);
    validateAllNumeric(parsedWinningNumbers);
    validateAllInRange(parsedWinningNumbers);
  } catch (error) {
    Console.print(error.message);
    await getValidateWinningNumbers();
  }
}

function validateSixNumbers(winningNumbers) {
  const validateWinningNumbers = winningNumbers
    .split(',')
    .map((num) => num.trim());
  if (validateWinningNumbers.length !== 6) {
    throw new Error('[ERROR] 입력할 로또 번호는 6개이며 ,(쉼표)로 구분합니다.');
  }

  return validateWinningNumbers;
}

function validateAllNumeric(winningNumbers) {
  winningNumbers.forEach((number) => {
    if (isNaN(number)) {
      throw new Error('[ERROR] 입력값은 숫자여야 합니다.');
    }
  });
}

function validateAllInRange(winningNumbers) {
  winningNumbers.forEach((number) => {
    if (number < 1 || number > 45) {
      throw new Error('[ERROR] 로또 번호는 1부터 45까지의 숫자입니다.');
    }
  });
}
