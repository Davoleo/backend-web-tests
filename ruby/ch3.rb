# Objects
# Methods
# Properties
# Classes
# File I/O

class Animal

    #Constructor
    def initialize
        puts "Creating a New Animal"
    end

    def set_name(new_name)
        @name = new_name
    end

    def get_name
        @name
    end

    def name
        @name
    end

    def name=(new_name)
        if new_name.is_a?(Numeric)
            puts "Name Can't be a number"
        else
            @name = new_name
        end
    end
end

cat = Animal.new

cat.set_name("Botolo")
puts cat.get_name
puts cat.name
cat.name = "Botolo Reborn"

class Dog
    # Automatic Setters and Getters
    # attr_reader :name, :height, :weight
    # attr_writer :name, :height, :weight
    attr_accessor :name, :height, :weight

    def bark
        return "Generic Bark"
    end

end

dog = Dog.new
dog.name = "ARGO"
puts dog.name

#DeveloperDog Extends Dog
class DeveloperDog < Dog

    def bark
        return "Bark in Ruby"
    end
end

dog_dev = DeveloperDog.new
dog_dev.name = "Doggo"
printf "%s goes %s \n", dog_dev.name, dog_dev.bark()
# %s : strings
# %d : integers
# %f : floats 

puts "--------------------------"
# File I/O

file = File.new("OSList.out", "w")
file.puts "Operating Systems:"
file.puts "Windows"
file.puts "Mac OS"
file.puts "Linux Arch"
file.close

puts File.read("OSList.out")

file = File.new("OSList.out", "a")
file.puts "Linux Ubuntu"
file.puts "Linux Manjaro"
file.puts "Linux Fedora"
file.close
