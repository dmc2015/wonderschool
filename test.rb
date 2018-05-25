def flatten_dictionary(dict)
# your code goes here
# iterate through a hash
# see if the hash has a hash
# if the hash has a hash concat it with it's parents hash
# if it doesn't have a hash move on
# if the key is a string move on
if dict.is_a? Hash
structure_hash(dict, {})
else
return 'not a hash'
end
end

def structure_hash(init_hash, new_hash)
dict.each do |hash, value|
#if value.is_a? Hash
#  modded = hash.to_s + '.' value.to_s
#  new_hash[modded.to_sym] = init_hash[value]
#   structure_hash(new_hash, value)
#elsif value == "" || value.is_a? Hash == false
#  next
#end
end
return new_hash
end

dict={
"Key1":"1",
"Key2":{
"a":"2",
"b":"3",
"c":{
"d":"3",
"e":{
"":"1"
}
}
}
}


flatten_dictionary(dict)
