# Add members to a sorted set

ZADD leaderboard 100 "Alice"
ZADD leaderboard 200 "Bob" 300 "Charlie"

# Get all members in the sorted set

ZRANGE leaderboard 0 -1

# Output: ["Alice", "Bob", "Charlie"]

# Get members with their scores

ZRANGE leaderboard 0 -1 WITHSCORES

# Output: ["Alice", "100", "Bob", "200", "Charlie", "300"]

# Get members by score range

ZRANGEBYSCORE leaderboard 150 300

# Output: ["Bob", "Charlie"]

# Remove a member from the sorted set

ZREM leaderboard "Alice"

# Output: 1 (number of members removed)

# Get the number of members in the sorted set

ZCARD leaderboard

# Output: 2

# Get the score of a specific member

ZSCORE leaderboard "Charlie"

# Output: "300"

# Increment the score of a member

ZINCRBY leaderboard 50 "Charlie"

# Output: "350"

# Get the rank of a member (0-based index)

ZRANK leaderboard "Charlie"

# Output: 1

# Get the reverse rank of a member

ZREVRANK leaderboard "Charlie"

# Output: 0

# Get members by lexicographical range

ZADD fruits 0 "apple" 0 "banana" 0 "cherry"
ZRANGEBYLEX fruits "[a" "[c"

# Output: ["apple", "banana", "cherry"]
