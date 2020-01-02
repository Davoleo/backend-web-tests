# Modules
# Polymorphism
# Enumerables

require_relative "module_human"

module Animal
    def make_sound
        puts "Grrrr!"
    end
end

class Cat
    include Animal
end

botolo =  Cat.new
botolo.make_sound

class Scientist
    include Human
    prepend Smart

    def act_smart
        return "E = mc^2"
    end
end

einstein = Scientist.new
einstein.name = "Albert"
puts einstein.name
einstein.run
puts einstein.name + " says " + einstein.act_smart

# --- Polymorphism ---
class Bird
    def tweet(bird_type)
        bird_type.tweet
    end
end

class Cardinal < Bird
    def tweet
        puts "Tweet Tweetter"
    end
end

class Parrot < Bird
    def tweet
        puts "Squawq"
    end
end

generic_bird = Bird.new
generic_bird.tweet(Cardinal.new)
generic_bird.tweet(Parrot.new)

puts "--------------------------"

# Enumerables
class Menu include Enumerable

    def each
        yield "pizza"
        yield "spaghetti"
        yield "lasagne"
        yield "salad"
    end
end

#builds the class
menu_options = Menu.new

menu_options.each do |food|
    puts "would you like some #{food}?"
end

puts "--------------------------"

# check if an object is present in the enumerable
p menu_options.find{|food| food = "pizza"}

# selects all the items that are less or equal than 5
p menu_options.select {|food| food.size <= 5}
# negated select
p menu_options.reject {|food| food.size <= 5}

puts "--------------------------"
# print out the first item
p menu_options.first
# print out the first and the second item
p menu_options.take(2)
puts "--------------------------"

# print out anything except the first two items
p menu_options.drop(2)
puts "--------------------------"

# depending on the alphabetical order
p menu_options.min
p menu_options.max
puts "--------------------------"

# sort an enumerable
p menu_options.sort
puts "--------------------------"

# Print out everything in reverse order
menu_options.reverse_each {|food| puts food}