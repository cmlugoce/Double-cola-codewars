## Solution 1

def whoIsNext(names, r)

geeks = names.length

while r > geeks

r -= geeks
geeks *= 2

end 

names[((r-1)/(geeks/names.length))]



end



### Solution 2

def whoIsNext(names, r)

  
   geekNames = names.length
   name_copies = 1

   while r > geekNames

    r -= geekNames
    name_copies *= 2
    geekNames *= 2

    end 

    names[(((r-1)/name_copies)%geekNames).floor]
 
 
 end
