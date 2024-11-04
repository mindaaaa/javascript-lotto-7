import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { GAME_SETTINGS, LOTTO, MESSAGES } from '../utils/constants.js';

class LottoIssuer {
  createLottoTickets(purchaseAmount) {
    const ticketCount = purchaseAmount / LOTTO.TICKET_PRICE;
    const lottoTickets = [];

    for (let i = GAME_SETTINGS.ZERO; i < ticketCount; i++) {
      const ticketNumbers = Random.pickUniqueNumbersInRange(
        LOTTO.NUMBER_RANGE.MIN,
        LOTTO.NUMBER_RANGE.MAX,
        LOTTO.WINNING_NUMBERS_COUNT
      ).sort((a, b) => a - b);

      lottoTickets.push(new Lotto(ticketNumbers));
    }
    Console.print(`${ticketCount}${MESSAGES.TICKET_PURCHASED}`);
    lottoTickets.forEach((ticket) => Console.print(ticket.toString()));

    return lottoTickets;
  }
}

export default new LottoIssuer();