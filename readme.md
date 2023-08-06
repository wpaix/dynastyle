# 🦖 Dynastyle.js
- Before vw, etc units were ready, I would use this to enable style parameters I craved for, such as:
- `<div data-dynastyle="height:50tw;">"` with tw being "this element's width"
- `<div data-dynastyle="height:10ww;">"` with ww being "window width"
- `<div data-dynastyle="height:50ph;">"` with ph being "this element parent's height"
- Units: tw, pw, ww, th, ph, wh

# 📦 Dependencies
- jQuery (this script is almost 10 years old)

# 🦀 Caveats
- There's no throttling done, and with calculations done on each window resize, dragging windows size around could cause a bit over-calculation.

# ☑︎ Todo
- Make things vanilla js compliant
- Put in some throttling
