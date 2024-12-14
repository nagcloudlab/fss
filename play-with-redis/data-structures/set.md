# Add members to a set

SADD fruits "apple"
SADD fruits "banana" "cherry"

# Output: 3 (number of elements added to the set)

# Get all members in a set

SMEMBERS fruits

# Output: ["apple", "banana", "cherry"]

# Check if a value is a member of a set

SISMEMBER fruits "banana"

# Output: 1 (true)

# Remove a member from a set

SREM fruits "banana"

# Output: 1 (number of elements removed)

# Get the number of members in a set

SCARD fruits

# Output: 2

# Remove and return a random member from a set

SPOP fruits

# Output: "apple" (the actual output can be any random member)

# Move a member from one set to another

SADD colors1 "red" "blue"
SADD colors2 "green"
SMOVE colors1 colors2 "red"

# Output: 1 (1 if the element was moved, 0 if the element was not a member of source)

# Get the union of multiple sets

SUNION colors1 colors2

# Output: ["blue", "green", "red"]

# Get the intersection of multiple sets

SADD setA "a" "b" "c"
SADD setB "b" "c" "d"
SINTER setA setB

# Output: ["b", "c"]

# Get the difference between multiple sets

SDIFF setA setB

# Output: ["a"]
