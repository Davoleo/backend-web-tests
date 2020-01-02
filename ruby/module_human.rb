# Modules (like Interfaces)
# Are made of objects and properties but they can't be instantiated
module Human
    attr_accessor :name, :height, :weight

    def run
        puts self.name + " runs"
    end
end

module Smart
    def act_smart
        return "E = mc²"
    end
end