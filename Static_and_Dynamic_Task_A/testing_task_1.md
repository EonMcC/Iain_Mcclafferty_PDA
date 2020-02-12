### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame


  def checkforAce(card)# Convention would be to underscore between words for function name
    if card.value = 1  # should be double equals '=='
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)  #'dif' should be 'def' & a comma should be after 'card1'
  if card1.value > card2.value
    return card   #should be 'card1'
  else
    return card2
  end
end
end  # this 'end' should be after the next function

def self.cards_total(cards)
  total     # this should be 'total = 0'
  for card in cards
    total += card.value
    return "You have a total of" + total  # 'total' would need to have '.to_s' after to turn it into a string.
  end
end
```
