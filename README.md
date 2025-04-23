I don't like the fact that gists are not also a repo. I think they should be (github feature request!)

Therefore I have decided putting all my gists in this repo, hoping GitHub would later adopt this pattern too, making `gists` a special reponame, just like `{owner}` is a special reponame.

As you can see, since I have always thought this, it has withheld me from creating many gists in the past, but now this repo is gonna grow.

# TODO

- `forgithub.cache` should have a gists endpoint that gets the URLs (or content as well if available)
- this would be used via uithub as special repo. if gists, then look up that repo if it exists, but use forgithub.cache + merge as fallback. This allows for easy download of all gists, then to use it as a repo.
