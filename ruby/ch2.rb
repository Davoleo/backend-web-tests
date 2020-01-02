# Functions
# Exceptions Handling
# Strings
# Symbols
# Arrays
# Hashes


def add_nums(num_1, num_2)
    return num_1.to_i + num_2.to_i
end
puts add_nums(3, 4)

# this demonstrates that: YOU CAN'T CHANGE PARAMETER'S VALUES
x=1
def change_x(x)
    x = 4
end

change_x(x)
puts "x = #{x}" 

puts "--------------------------"
print "Enter a number : "
first_num = gets.to_i
print "Enter another number : "
second_num = gets.to_i

# Begin works like a try block
# Rescue works like a catch block
begin
    answer = first_num / second_num
rescue
    puts "You can't divide by 0"
    exit
end

puts "#{first_num} / #{second_num} = #{answer}"

#Throw custom exceptions
def check_age(age)
    raise ArgumentError, "Enter Positive Number" unless age > 0
end

begin 
    check_age(-1)
rescue ArgumentError
    puts "That is an impossible age"
end
puts "--------------------------"

#Interpolation and escape sequences function only if you use double quotes
puts "Add Them #{4 + 5} \n\n"
puts 'Add Them #{4 + 5} \n\n'


multiline_string = <<EOM
This is a very long string
that contains interpolation
like #{2 + 3} \n\n
EOM

puts multiline_string
puts "--------------------------"

name = "Davoleo"
#Returns if the string contains the string in the parameter
puts name.include?("avo")
#Returns the number of chars in the string
puts name.size
#Counts specific chars
puts "Vowels : " + name.count("aeiou").to_s
puts "Consonants : " + name.count("^aeiou").to_s
#Checks if the string starts with a specific char sequence
puts name.start_with?("L")
#Returns the index of the char sequence in the argument
puts "Index : " + name.index("leo").to_s
#Change String case style
puts name.upcase
puts name.downcase
puts name.swapcase
#Strip off all the white spaces from strings
name = "        " + name
name = name.lstrip #rstrip does this on the right | strip does it everywhere
#Justify String utility
puts name.rjust(20, ".")
puts name.ljust(20, ".")
puts name.center(20, ".")

#Truncates the string
puts name.chop #of one char
puts name.chomp("leo") #of whatever chars you choose as argument
#Deletes all the occurrences of a specific char
puts name.delete("e")
puts "--------------------------"

#Splits a string into an array
name_array = name.split(//)
puts name_array

name_array = name.split(/l/)
puts name_array

#String conversion:
# to integer: to_i
# to float: to_f
# to a symbol: to_sym

=begin
Escape Sequences:
\\ -> Backslash
\' -> Single-quote
\" -> Double-quote
\a -> Bell
\b -> Backspace
\f -> Formfeed
\n -> Newline
\r -> Carriage
\t -> Tab
\v -> Vertical Tab
=end


#Simbols
#Basically strings that cannot change
# Reasons: Conserve memory | Speed up string comparison
:davoleo

puts "------------------------"
puts :davoleo  
puts :davoleo.to_s
puts :davoleo.class
puts :davoleo.object_id

puts "------------------------"

#Arrays
array_1 = Array.new
array_2 = Array.new(5)  #5 slots with null default values
array_3 = Array.new(5, "empty") #5 slots with "empty" default value
array_4 = [1, "two", 3, 3.5]

#Prints all the arrays' items in new lines
puts array_1
puts array_2
puts array_3
puts array_4

puts "------------------------"

# The third item of the fourth array
puts array_4[2]
puts array_4[2, 2].join(", ")
puts array_4.values_at(0, 1, 3).join(", ")

# Unshift add the parater at the beginning of the array
# Shift removes the first array item
array_4.unshift(0)
array_4.shift()

# push adds values to the end of the array
# pop removes the last value from the array
array_4.push(100, 200)
array_4.pop()

array_4.concat([10, 20, 30])
puts "Array Size: " + array_4.size().to_s

puts "Array Contains 100: " + array_4.include?(100).to_s

puts "How Many 100s: " + array_4.count(100).to_s

puts "Array is empty: " + array_4.empty?.to_s

puts "------------------------"
p array_4
puts "------------------------"
array_4.each do |value|
    puts value 
end

puts "------------------------"

# Hashes
# Store Key/Value Pairs
number_hash = { "PI" => 3.14 ,
                "Golden" => 1.618,
                "e" => 2.718 }

puts number_hash["PI"]

anime_years = Hash["Re:Zero", 2016, "Lucky☆Star", 2007, "RErideD", 2018]
puts anime_years["Re:Zero"]
anime_years["Clockwork Planet"] = 2017

# Creates a new hash with a warning message if an invalid key is entered
hash_sample = Hash.new("No such key")
puts hash_sample["§§§§§§§§§§§§§§§§§§"]

anime_years_2 = Hash["Just Because!", 2017, "Angel Beats!", 2010, "Kill la Kill", 2013]

# Destructive merge (Eliminates duplicates)
anime_years.update(anime_years_2)

# Non-Destructive merge
#anime_years.merge(anime_years_2)

puts "------------------------"

anime_years.each do |key, value|
    puts key.to_s + " | " + value.to_s
end

puts "------------------------"

#Hash Utilities
puts "Has Key Kill la Kill : " + anime_years.has_key?("Kill la Kill").to_s
puts "Has Value 2007 : " + anime_years.has_value?(2007).to_s
puts "Is Empty : " + anime_years.empty?.to_s
puts "Size : " + anime_years.size.to_s

puts "------------------------"

#Remove a pair
anime_years.delete("Just Because!")

puts "Size : " + anime_years.size.to_s