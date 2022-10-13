/*
Write a function that when given a URL as a string,
parses out just the domain name and returns it as a string.
For example:
domainName("http://github.com/carbonfive/raygun") == "github"
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"

Parameters: addy - a string containing the URL address of a website.
Return: A string containing just the domain name of the input URL address.
Examples: domainName("https://twitch.com/") -> "twitch"
          domainName("http://www.amazon.com/gp/browse.html") -> "amazon"
          domainName("https://twitter.com/huntobertweets") -> "twitter"
Pseudocode: addy.replace("http://" && "https://" && "www." with "")
            domainName = addy.split(".")[0]
            return domainName
*/

function domainName(addy) {
  return addy.replace("https://", "")
             .replace("http://", "")
             .replace("www.", "")
             .split(".")[0];
}
