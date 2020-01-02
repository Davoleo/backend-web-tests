# Hello World
# Data output and input
# Data casts
# Arithmetic
# File I/O
# Conditions
# Ifs
# Switches
# Ternary
# Loops

# Example Single Line Comment

=begin
Example Multi-Line Comment
ASASSASASASASSASASAS
aSASASDADSADASDSADASD
=end

# prints data on the monitor (WITH NEW LINE)
puts "Hello World!"

# prints data on the monitor (NO NEW LINE)
print "Enter a Value..."

# Conventional variable naming format
first_num = gets.to_i
# Gets an input and converts it to an integer ^

print "Enter Another Value..."
second_num = gets.to_i

# to_s converts something to a String
puts first_num.to_s + " + " + second_num.to_s + " = " + (first_num + second_num).to_s
puts "--------------------------"

# Arithmetic Operators
puts "6 + 4 " + (6 + 4).to_s
puts "6 - 4 " + (6 - 4).to_s
puts "6 * 4 " + (6 * 4).to_s
puts "6 / 4 " + (6 / 4).to_s
puts "6 % 4 " + (6 % 4).to_s
puts "--------------------------"

num_one = 1.000
num99 = 0.999

#Float accuracy to the fourteenth digit
puts num_one.to_s + " - " + num99.to_s + " = " + (num_one - num99).to_s
puts "----------------------------"

puts 1.class
puts 1.234.class
puts "string".class
puts "----------------------------"

# Constants start with an uppercase letter
EXAMPLE_CONSTANT = 3.14
# still allows to change constants, but it will output an error
EXAMPLE_CONSTANT = 1.6

puts EXAMPLE_CONSTANT
puts "----------------------------"

# Return File objects
# yourSum.out = fileName + extension
# w: means it's going to write to it (or create it)
write_handler = File.new("yourSum.out", "w")
write_handler.puts("Random Text").to_s
write_handler.close

data_from_file = File.read("yourSum.out")
puts "Data from File : " + data_from_file
puts "----------------------------"

# Load External Ruby Files
load "hello-world.rb"
puts "----------------------------"

#Conditional Operations
#Comparison Operators: == != < > <= >=
#Logical Operators: (&& ||  !) --- (and or not)
age = 12

if (age >= 5) && (age <=6)
    puts "You're in Kindergarten"
elsif (age >= 7) && (age <= 13)
    puts "You're in Middle School"
    puts "You're in Middle School"
else
    puts "Stay Home"
end
puts "----------------------------"

puts "true && false = " + (true && false).to_s
puts "true || false = " + (true || false).to_s
puts "!false = " + (!false).to_s
puts "----------------------------"

#Universal Comparison Operator ( <=> )

=begin
outputs: 
0: if the numbers are equals
1: if the first number is greater
-1: if the second number is greater
=end
puts "5 <=> 10 = " + (5 <=> 10).to_s

#unless Operator (negated if)
unless age > 4
    puts "No School"
else
    puts "Go To School"
end

#In-line conditions
puts "you're young" if age < 30
puts "----------------------------"

#Case Statement
print "Enter Greeting: "

#chomp removes the new line from the user input
greeting = gets.chomp

#else = default
# case = switch
# when = case
case greeting
when "French", "french"
    puts "Bounjour"
    exit
when "Spanish", "spanish"
    puts "Hola"
    exit
else "English"
    puts "Hello"
end
puts "----------------------------"

#Ternary Operator
#Condition ? Executes_if_True : Executes_if_False

puts (age >= 50) ? "Old" : "Young"
puts "----------------------------"

x = 1

#Example loop do
loop do 
    x += 1

    next unless (x % 2) == 0
    puts x

    break if x >= 10
end
puts "----------------------------"

y = 1

#Example While Loop
while y <= 10
    y += 1

    next unless (y % 2) == 0
    puts y
end
puts "----------------------------"

a = 1

#Example Until Loop (Negated while)
until a >= 10
    a += 1

    next unless (a % 2) == 0
    puts a
end
puts "----------------------------"

numbers = [1, 2, 3, 4, 5]

#Example For loop with Literal Templates (iterates over an array)
for number in numbers do
    print "#{number} | "
end
puts ""
puts "----------------------------"

food = ["bananas", "pasta", "pizza", "apples", "bacon"]

#Example Each loop (foodItem Stores the temporary food as the loop cycles)
food.each do |foodItem|
    puts "Food List Content: #{foodItem}"
end

#Example Each Loop to cycle through numbers (Range)
(0..5).each do |i|
    puts "##{i}"