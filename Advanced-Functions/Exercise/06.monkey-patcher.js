function solution(cmd) {
    const commands = {
        upvote: () => this.upvotes++,
        downvote: () => this.downvotes++,
        score: () => {
            let { upvotes, downvotes } = this;
            let totalVotes = upvotes + downvotes;

            const obfuscate = () => Math.ceil(0.25 * Math.max(upvotes, downvotes));
            let obfuscatedUpVotes = upvotes + obfuscate();
            let obfuscatedDownVotes = downvotes + obfuscate();
            let balance = obfuscatedUpVotes - obfuscatedDownVotes;

            let rating = (totalVotes < 10) ? 'new' : (upvotes > totalVotes * 0.66) ? 'hot'
                : (balance >= 0 && (upvotes > 100 || downvotes > 100)) ? 'controversial'
                    : (balance < 0) ? 'unpopular'
                        : 'new';

            if (totalVotes > 50) return [obfuscatedUpVotes, obfuscatedDownVotes, balance, rating];

            return [upvotes, downvotes, balance, rating];
        }
    }

    return commands[cmd]();
}
