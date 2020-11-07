# targetscripts

This script was built with the purpose and intention to assist in grabbing a preorder item at target.
It can be modified to suit any pre-order item by simply changing the designated url.
You can also disable the add insurance option by adding // at the beginning of said line. 
It is a userscript built to work with the tampermonkey extension on google chrome, and 
Should be compatible with greasemonkey as well.

## Installation
To use, simply install one of the above mentioned extensions by clicking the 'Raw' link. 
If everything works, you should see TamperMonkey ask you to confirm the installation of the new script.
Then browse to the designated url, refresh once and it should be on its way to
preordering glory.

It's purpose is merely to add the item to cart and then proceed to said cart. Follow the instructions
at the end of the script to modify brewcrew87's script to automate the entire ordering process,
also removing the added insurace, this of course isn't required if disabled.

## Modifying
If you want to modify the script to watch a different url, make sure to remove the @updateUrl and 
@downloadUrl lines from the script otherwise your changes could get overwritten by updates from 
the original script.

# Disclaimer
Use at your own, which includes, but is not limited to any possible bans, cart lockouts,
cancelled orders, etc.
