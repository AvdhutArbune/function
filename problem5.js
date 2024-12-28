let sentenceBuilder = {
    subject: "I",
    verb: "am",
    object: "coding",
    buildSentence: function () {
        if (this.subject && this.verb && this.object) {
            return this.subject + " " + this.verb + " " + this.object;
        }
        return "Incomplete sentence";
    },

    // Method to update a property
    updateProperty: function (property, value) {
        // Brute force check for each property name
        if (property === "subject") {
            this.subject = value;
            return `${property} updated to "${value}"`;
        } else if (property === "verb") {
            this.verb = value;
            return `${property} updated to "${value}"`;
        } else if (property === "object") {
            this.object = value;
            return `${property} updated to "${value}"`;
        } else {
            return "Invalid property";
        }
    }
};

// Example usage:
console.log(sentenceBuilder.buildSentence()); // Output: "I am coding"

console.log(sentenceBuilder.updateProperty("verb", "am learning")); // Output: "verb updated to 'am learning'"
console.log(sentenceBuilder.buildSentence()); // Output: "I am learning coding"

console.log(sentenceBuilder.updateProperty("subject", "The cat")); // Output: "subject updated to 'The cat'"
console.log(sentenceBuilder.buildSentence()); // Output: "The cat am learning coding"

console.log(sentenceBuilder.updateProperty("mood", "happy")); // Output: "Invalid property"

console.log(sentenceBuilder.updateProperty("verb", "")); // Output: "verb updated to ''"
console.log(sentenceBuilder.buildSentence()); // Output: "Incomplete sentence"
