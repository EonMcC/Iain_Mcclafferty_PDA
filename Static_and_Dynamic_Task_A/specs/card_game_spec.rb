require("minitest/autorun")
require("minitest/rg")
require_relative("../card_game.rb")
require_relative("../card.rb")

class TestCardGame < MiniTest::Test
  def setup()
    @card1 = Card.new("Spade", 1)
    @card2 = Card.new("Spade", 5)

    @game1 = CardGame.new()

    @cards = [@card1, @card2]
  end

  def test_checkforAce()
    assert_equal(true, @game1.checkforAce(@card1))
    assert_equal(false, @game1.checkforAce(@card2))
  end

  def test_highest_card()
    assert_equal(@card2, @game1.highest_card(@card1, @card2))
    assert_equal(@card2, @game1.highest_card(@card2, @card1))
  end

  def test_cards_total()
    assert_equal("You have a total of 1", CardGame.cards_total(@cards))
  end

end
