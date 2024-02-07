## Accessibility Violations Check 🔎

### ⏳ Accessibility violations found.

#### Ensures buttons have discernible text

##### ❌ Critical accessibility violations found.

See comments below.

[Buttons must have discernible text](https://dequeuniversity.com/rules/axe/3.5/button-name?application=axe-puppeteer)

- Impact: **critical**

- Tags: `cat.name-role-value`, `wcag2a`, `wcag412`, `section508`, `section508.22.a`

<details><summary>Click here for detailed report</summary>

1.  **Node:** `<button class="menu-button">
      <div class="menu-icon"></div>
    </button>`, **Impact:** critical

    Fix any of the following:

    - Element does not have inner text that is visible to screen readers

    - aria-label attribute does not exist or is empty

    - aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty

    - Element's default semantics were not overridden with role="presentation"

    - Element's default semantics were not overridden with role="none"

    - Element has no title attribute or the title attribute is empty

</details>
