import type { Snippet } from '../types';
import { SquarespaceVersion } from '../types';

export const snippets: Snippet[] = [
  {
    id: 1,
    title: 'Full Width Section',
    description: 'Makes a specific section on a page stretch to the full width of the browser window.',
    code: `
#your-section-id {
  max-width: 100% !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
}
#your-section-id .content-wrapper {
  max-width: 100% !important;
}
    `,
    categories: ['Layout', 'Sections'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="width: 100%; background: #3b82f6; color: white; padding: 1rem; text-align: center;">This is a full-width section.</div>`
  },
  {
    id: 2,
    title: 'Change Body Font',
    description: 'Applies a custom font to the main body text across the entire site.',
    code: `
body {
  font-family: 'Georgia', serif !important;
}
    `,
    categories: ['Typography', 'Global Styles'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<p>This text is now in Georgia font.</p>`
  },
  {
    id: 3,
    title: 'Hide Header and Footer',
    description: 'Useful for creating landing pages without the main site navigation or footer.',
    code: `
header, footer {
  display: none !important;
}
    `,
    categories: ['Layout', 'Header & Footer'],
    version: SquarespaceVersion.V7_0,
    previewHtml: `<div style="border: 2px dashed #ccc; padding: 1rem; color: #999;">Header and Footer would be hidden.</div>`
  },
  {
    id: 4,
    title: 'Customize Button Style',
    description: 'Changes the appearance of all primary buttons with custom colors and a hover effect.',
    code: `
.sqs-block-button-element--primary {
  background-color: #3b82f6 !important;
  border: 1px solid #3b82f6 !important;
  color: #ffffff !important;
  padding: 12px 24px;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.sqs-block-button-element--primary:hover {
  background-color: #2563eb !important;
  transform: translateY(-2px);
}
    `,
    categories: ['Buttons', 'Styling'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<a href="#" class="sqs-block-button-element--primary">Click Me</a>`
  },
  {
    id: 5,
    title: 'Transparent Header on Banner',
    description: 'Makes the header background transparent when it is over a banner image.',
    code: `
.header-announcement-bar-wrapper {
  position: absolute !important;
  width: 100%;
  top: 0;
  left: 0;
}
#header {
  background-color: transparent !important;
}
    `,
    categories: ['Header & Footer', 'Layout'],
    version: SquarespaceVersion.V7_0,
    previewHtml: `<div style="font-style: italic; color: #777;">Simulates a transparent header over a banner.</div>`
  },
  {
    id: 6,
    title: 'Mobile Navigation Breakpoint',
    description: 'Changes the screen width at which the desktop navigation switches to the mobile burger menu.',
    code: `
/* Adjust the max-width value as needed */
@media screen and (max-width: 1024px) {
  .header-display-desktop {
    display: none !important;
  }
  .header-display-mobile {
    display: block !important;
  }
}
    `,
    categories: ['Navigation', 'Responsive'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-style: italic; color: #777;">Affects navigation on different screen sizes.</div>`
  },
   {
    id: 7,
    title: 'Underline Links on Hover',
    description: 'Adds a simple underline to all links only when a user hovers over them.',
    code: `
a {
  text-decoration: none !important;
  transition: text-decoration 0.3s ease;
}

a:hover {
  text-decoration: underline !important;
}
    `,
    categories: ['Typography', 'Styling'],
    version: SquarespaceVersion.V7_0,
    previewHtml: `<a href="#" style="color: var(--primary-color); font-weight: 500;">Hover over me</a>`
  },
  {
    id: 8,
    title: 'Square Image Blocks',
    description: 'Forces all image blocks to display as perfect squares, useful for uniform galleries.',
    code: `
.sqs-block-image .intrinsic {
  padding-bottom: 100% !important;
}
    `,
    categories: ['Images', 'Layout'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="width: 80px; height: 80px; background: #999;" class="sqs-block-image"><div class="intrinsic" style="padding-bottom: 0 !important; height: 100%;"></div></div>`
  },
  {
    id: 9,
    title: 'Text Shadow for Headings',
    description: 'Adds a subtle shadow to all H1 headings for better readability on busy backgrounds.',
    code: `
h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3) !important;
}
    `,
    categories: ['Typography', 'Styling'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<h1 style="font-size: 2rem; font-weight: 700;">Heading with Shadow</h1>`
  },
  {
    id: 10,
    title: 'Pill-Shaped Buttons',
    description: 'Gives all buttons a rounded, pill-like shape.',
    code: `
.sqs-block-button-element {
  border-radius: 50px !important;
}
    `,
    categories: ['Buttons', 'Styling'],
    version: SquarespaceVersion.V7_0,
    previewHtml: `<a href="#" style="background: var(--primary-color); color: white; padding: 10px 20px; text-decoration: none;" class="sqs-block-button-element">Pill Button</a>`
  },
  {
    id: 11,
    title: 'Image Block Hover Zoom',
    description: 'Slightly zooms in on an image when a user hovers over it.',
    code: `
.sqs-block-image .thumb-image {
  transition: transform 0.4s ease-out !important;
}

.sqs-block-image:hover .thumb-image {
  transform: scale(1.05) !important;
}
    `,
    categories: ['Images', 'Animations'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div class="sqs-block-image" style="width: 100px; height: 100px; background: #555; overflow: hidden;"><div class="thumb-image" style="width: 100%; height: 100%; background: #999; color: white; display: flex; align-items: center; justify-content: center;">Hover</div></div>`
  },
  {
    id: 12,
    title: 'Custom Blockquote Style',
    description: 'Styles blockquotes with a left border and italic text for emphasis.',
    code: `
blockquote {
  border-left: 4px solid #3b82f6 !important;
  padding-left: 20px !important;
  font-style: italic !important;
  color: #d1d5db !important;
}
    `,
    categories: ['Typography', 'Styling'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<blockquote style="color: #333;">This is an inspiring quote.</blockquote>`
  },
  {
    id: 13,
    title: 'Hide Blog Post Author',
    description: 'Removes the author\'s name from all blog posts.',
    code: `
.blog-item-author-name {
  display: none !important;
}
    `,
    categories: ['Blog', 'Layout'],
    version: SquarespaceVersion.V7_0,
    previewHtml: `<div style="font-style: italic; color: #777;">Author name would be hidden here.</div>`
  },
  {
    id: 14,
    title: 'Grayscale Image Filter',
    description: 'Applies a grayscale filter to all images, which is removed on hover.',
    code: `
.sqs-block-image img {
  filter: grayscale(100%);
  transition: filter 0.3s ease !important;
}

.sqs-block-image:hover img {
  filter: grayscale(0%);
}
    `,
    categories: ['Images', 'Styling'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div class="sqs-block-image" style="width: 100px; height: 100px; background: linear-gradient(to right, #e66465, #9198e5);"><img style="width: 100%; height: 100%;" /></div>`
  },
  {
    id: 15,
    title: 'Sticky Announcement Bar',
    description: 'Makes the announcement bar stick to the top of the screen on scroll.',
    code: `
.sqs-announcement-bar-wrapper {
  position: sticky !important;
  top: 0;
  z-index: 999;
}
    `,
    categories: ['Header & Footer', 'Layout'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-style: italic; color: #777;">Announcement bar would stick to top.</div>`
  },
  {
    id: 16,
    title: 'Fade In Page Content',
    description: 'Adds a simple fade-in animation to the main page content on load.',
    code: `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

#site-wrapper {
  animation: fadeIn 0.8s ease-in-out;
}
    `,
    categories: ['Animations', 'Global Styles'],
    version: SquarespaceVersion.V7_0,
    previewHtml: `<div id="site-wrapper">Page content fades in.</div>`
  },
  {
    id: 17,
    title: 'Remove Hyphens from Text',
    description: 'Prevents words from being hyphenated and breaking across lines.',
    code: `
p, h1, h2, h3 {
  hyphens: none !important;
  -webkit-hyphens: none !important;
  -ms-hyphens: none !important;
}
    `,
    categories: ['Typography', 'Global Styles'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<p style="width: 150px; border: 1px solid #ccc; padding: 5px;">This unhyphenated text won't break mid-word.</p>`
  },
  {
    id: 18,
    title: 'Custom Horizontal Rule (HR)',
    description: 'Styles the horizontal rule element with a custom color and height.',
    code: `
hr {
  border: none !important;
  height: 2px !important;
  background-color: #4b5563 !important; /* gray-600 */
}
    `,
    categories: ['Styling', 'Global Styles'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<p>Text above</p><hr /><p>Text below</p>`
  },
  {
    id: 19,
    title: 'Hide Price on Product Page',
    description: 'Hides the price for specific products, useful for catalog-only items.',
    code: `
/* Find the collection ID for the product page */
.collection-id-goes-here .product-price {
  display: none !important;
}
    `,
    categories: ['Shop', 'Products'],
    version: SquarespaceVersion.V7_0,
    previewHtml: `<div style="font-style: italic; color: #777;">Price would be hidden on this product.</div>`
  },
  {
    id: 20,
    title: 'Change Summary Block Title Font',
    description: 'Targets the title of items within a Summary Block to apply custom font styling.',
    code: `
.summary-title a {
  font-family: 'Playfair Display', serif !important;
  font-size: 1.5rem !important;
  font-weight: 700 !important;
}
    `,
    categories: ['Typography', 'Layout'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<h3 class="summary-title"><a href="#" style="text-decoration: none; color: var(--text-color);">A Styled Summary Title</a></h3>`
  },
  {
    id: 21,
    title: 'Add Border to All Images',
    description: 'Applies a simple, clean border around every image on the site.',
    code: `
.sqs-block-image img {
  border: 2px solid #e5e7eb !important; /* gray-200 */
  padding: 5px !important;
  box-sizing: border-box;
}
    `,
    categories: ['Images', 'Global Styles'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div class="sqs-block-image" style="width: 100px; height: 100px; background: #777;"><img style="width: 100%; height: 100%;" /></div>`
  },
  {
    id: 22,
    title: 'Custom Form Field Focus',
    description: 'Highlights form fields with a blue border when they are selected (in focus).',
    code: `
.form-wrapper .field-element:focus {
  border-color: #3b82f6 !important;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.4) !important;
}
    `,
    categories: ['Forms', 'Styling'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div class="form-wrapper"><input type="text" placeholder="Focus on me" class="field-element" style="padding: 8px; border: 1px solid #ccc; border-radius: 4px;"/></div>`
  },
  {
    id: 23,
    title: 'Hide Page Title',
    description: 'Hides the main title on a specific page. Useful for pages with a single banner image.',
    code: `
/* Add to the Page Header Code Injection for one page */
<style>
  .page-title { display: none !important; }
</style>
    `,
    categories: ['Layout', 'Pages'],
    version: SquarespaceVersion.V7_0,
    previewHtml: `<div style="font-style: italic; color: #777;">Page title would be hidden.</div>`
  },
  {
    id: 24,
    title: ' Uppercase Navigation Links',
    description: 'Transforms all main navigation links to uppercase text.',
    code: `
.header-nav-item a {
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
  font-size: 0.8rem !important;
}
    `,
    categories: ['Navigation', 'Typography'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<nav><a href="#" class="header-nav-item" style="color: var(--text-color); text-decoration: none;">Home</a></nav>`
  },
  {
    id: 25,
    title: 'Always Show Mobile Menu',
    description: 'Forces the mobile "burger" menu to be visible on all screen sizes, including desktop.',
    code: `
.header-display-desktop {
  display: none !important;
}
.header-display-mobile {
  display: block !important;
}
    `,
    categories: ['Navigation', 'Responsive'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-style: italic; color: #777;">Forces mobile navigation on all devices.</div>`
  },
  {
    id: 26,
    title: 'Increase Body Text Size',
    description: 'Sets a larger base font size for all paragraph text for improved readability.',
    code: `
body, p {
  font-size: 18px !important;
  line-height: 1.7 !important;
}
    `,
    categories: ['Typography', 'Global Styles'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<p>This paragraph text is larger and easier to read.</p>`
  },
  {
    id: 27,
    title: 'Add Box Shadow to Sections',
    description: 'Adds a subtle box shadow to all page sections for a layered, modern look.',
    code: `
.page-section {
  box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
  margin: 2rem 0 !important;
  border-radius: 8px;
}
    `,
    categories: ['Layout', 'Sections'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div class="page-section" style="padding: 1rem; border: 1px solid #ddd; background: #fff;">A section with a shadow.</div>`
  },
  {
    id: 28,
    title: 'Style "On Sale" Badge',
    description: 'Customizes the appearance of the sale badge on products.',
    code: `
.product-mark.sale {
  background-color: #ef4444 !important;
  color: white !important;
  font-weight: bold !important;
  border-radius: 4px !important;
}
    `,
    categories: ['Shop', 'Styling'],
    version: SquarespaceVersion.V7_0,
    previewHtml: `<div class="product-mark sale" style="padding: 4px 8px; display: inline-block;">SALE</div>`
  },
  {
    id: 29,
    title: 'Remove Underline from All Links',
    description: 'Globally removes the underline from all links for a cleaner look.',
    code: `
a, a:visited {
  text-decoration: none !important;
}
    `,
    categories: ['Typography', 'Global Styles'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<a href="#" style="color: var(--primary-color);">This link has no underline.</a>`
  },
  {
    id: 30,
    title: 'Center The Site Logo',
    description: 'Centers the site logo or title in the header.',
    code: `
.header-title-nav-wrapper {
  justify-content: center !important;
}
.header-actions {
  flex-grow: 0 !important;
}
    `,
    categories: ['Header & Footer', 'Layout'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-style: italic; color: #777;">Site logo would be centered.</div>`
  },
  {
    id: 31,
    title: 'Custom Scrollbar',
    description: 'Applies a subtle, custom-styled scrollbar for Webkit browsers (Chrome, Safari).',
    code: `
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
    `,
    categories: ['Styling', 'Global Styles'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-style: italic; color: #777;">A custom scrollbar will appear on scrollable content.</div>`
  },
  {
    id: 32,
    title: 'Disable Text Selection',
    description: 'Prevents users from selecting text on the page.',
    code: `
body {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
    `,
    categories: ['Styling', 'Global Styles'],
    version: SquarespaceVersion.V7_0,
    previewHtml: `<p>You cannot select this text.</p>`
  },
  {
    id: 33,
    title: 'Hide Gallery Page Titles',
    description: 'Hides the titles that appear under images in a gallery page.',
    code: `
.gallery-caption {
  display: none !important;
}
    `,
    categories: ['Images', 'Galleries'],
    version: SquarespaceVersion.V7_0,
    previewHtml: `<div style="font-style: italic; color: #777;">Image captions in galleries would be hidden.</div>`
  },
  {
    id: 34,
    title: 'Equal Height Summary Items',
    description: 'Forces all items in a summary block grid to be the same height.',
    code: `
.summary-item-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Adjust count as needed */
  gap: 20px;
}
.summary-item {
  display: flex;
  flex-direction: column;
}
.summary-content {
  flex-grow: 1;
}
    `,
    categories: ['Layout', 'Summaries'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-style: italic; color: #777;">Creates equal height summary blocks.</div>`
  },
  {
    id: 35,
    title: 'Solid Color Navigation on Scroll',
    description: 'Makes a transparent header turn to a solid color when the user scrolls down.',
    code: `
/* Add to Header Code Injection */
<script>
  window.addEventListener('scroll', function() {
    var header = document.querySelector('#header');
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
</script>

/* Add to Custom CSS */
#header {
  transition: background-color 0.4s ease;
}
#header.scrolled {
  background-color: #000 !important;
}
    `,
    categories: ['Navigation', 'Header & Footer'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-style: italic; color: #777;">Header changes color on scroll. Requires JS.</div>`
  },
  {
    id: 36,
    title: 'Button Hover - Ghost Style',
    description: 'Creates a "ghost button" effect where the background fills in on hover.',
    code: `
.sqs-block-button-element--primary {
  background-color: transparent !important;
  border: 2px solid #3b82f6 !important;
  color: #3b82f6 !important;
  transition: all 0.3s ease;
}

.sqs-block-button-element--primary:hover {
  background-color: #3b82f6 !important;
  color: #fff !important;
}
    `,
    categories: ['Buttons', 'Animations'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<a href="#" class="sqs-block-button-element--primary" style="padding: 10px 20px; display: inline-block; text-decoration: none;">Ghost Button</a>`
  },
  {
    id: 37,
    title: 'Remove Folder Dropdown Arrow',
    description: 'Hides the arrow icon next to folder items in the main navigation.',
    code: `
.header-nav-folder-item .header-nav-folder-arrow {
  display: none !important;
}
    `,
    categories: ['Navigation', 'Styling'],
    version: SquarespaceVersion.V7_0,
    previewHtml: `<div style="font-style: italic; color: #777;">Folder dropdown arrow would be hidden.</div>`
  },
  {
    id: 38,
    title: 'Circle Image Blocks',
    description: 'Forces all image blocks to display as perfect circles.',
    code: `
.sqs-block-image .thumb-image {
  border-radius: 50% !important;
}
.sqs-block-image .intrinsic {
  padding-bottom: 100% !important;
}
    `,
    categories: ['Images', 'Layout'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="width: 80px; height: 80px; background: #999;" class="sqs-block-image"><div class="thumb-image" style="width: 100%; height: 100%;"></div></div>`
  },
  {
    id: 39,
    title: 'Add Line Through Price',
    description: 'Adds a line-through to the original price of a sale item.',
    code: `
.product-price .original-price {
  text-decoration: line-through !important;
  color: #9ca3af !important; /* gray-400 */
  margin-right: 10px;
}
    `,
    categories: ['Shop', 'Styling'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div><span class="original-price" style="font-size: 0.9rem;">$25.00</span><span class="sale-price" style="font-weight: bold;">$20.00</span></div>`
  },
  {
    id: 40,
    title: 'Hide "Powered by Squarespace"',
    description: 'Removes the "Powered by Squarespace" text from the site footer.',
    code: `
.sqs-use-squarespace-domain-notice {
  display: none !important;
}
    `,
    categories: ['Header & Footer', 'Layout'],
    version: SquarespaceVersion.V7_0,
    previewHtml: `<div style="font-style: italic; color: #777;">Removes the Squarespace credit in the footer.</div>`
  },
  {
    id: 41,
    title: 'Gradient Text for Headings',
    description: 'Applies a CSS gradient as the color for H1 headings.',
    code: `
h1 {
  background: -webkit-linear-gradient(45deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
    `,
    categories: ['Typography', 'Styling'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<h1 style="font-size: 2rem; font-weight: 700;">Gradient Heading</h1>`
  },
  {
    id: 42,
    title: 'Pulse Animation for Button',
    description: 'Adds a subtle pulsing animation to a specific button to draw attention.',
    code: `
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
  100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
}
/* Target a button with a specific ID */
#my-special-button .sqs-block-button-element {
  animation: pulse 2s infinite;
}
    `,
    categories: ['Buttons', 'Animations'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div id="my-special-button"><a href="#" class="sqs-block-button-element" style="padding: 10px 20px; border-radius: 5px; background: #3b82f6; color: white; text-decoration: none;">Pulsing Button</a></div>`
  },
  {
    id: 43,
    title: 'Hide Images on Mobile',
    description: 'Hides all image blocks when the site is viewed on a mobile device.',
    code: `
@media screen and (max-width: 767px) {
  .sqs-block-image {
    display: none !important;
  }
}
    `,
    categories: ['Images', 'Responsive'],
    version: SquarespaceVersion.V7_0,
    previewHtml: `<div style="font-style: italic; color: #777;">Images would be hidden on screens narrower than 767px.</div>`
  },
  {
    id: 44,
    title: 'Floating Social Icons',
    description: 'Makes the built-in social icons block float on the side of the page.',
    code: `
#block-id-goes-here {
  position: fixed !important;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: 100;
}
    `,
    categories: ['Social', 'Layout'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-style: italic; color: #777;">Makes a block float on the side.</div>`
  },
  {
    id: 45,
    title: 'Auto-playing Looping Background Video',
    description: 'Ensures background videos autoplay, loop, and have no audio.',
    code: `
.sqs-video-background video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
    `,
    categories: ['Video', 'Layout'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-style: italic; color: #777;">Styles background videos to fill their container.</div>`
  },
  {
    id: 46,
    title: 'Navbar Glassmorphism Effect',
    description: 'Gives the header a frosted glass effect using backdrop filter.',
    code: `
#header {
  background-color: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
    `,
    categories: ['Header & Footer', 'Styling'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-style: italic; color: #777;">Applies a frosted glass effect to the header.</div>`
  },
  {
    id: 47,
    title: 'Last Navigation Link as Button',
    description: 'Styles the last link in your main navigation to look like a call-to-action button.',
    code: `
.header-nav-list .header-nav-item:last-child a {
  background-color: #3b82f6 !important;
  color: white !important;
  padding: 10px 20px !important;
  border-radius: 5px;
}
.header-nav-list .header-nav-item:last-child a:hover {
  background-color: #2563eb !important;
}
    `,
    categories: ['Navigation', 'Buttons'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<nav class="header-nav-list"><div class="header-nav-item"><a href="#" style="color: var(--text-color); text-decoration: none;">Contact Us</a></div></nav>`
  },
  {
    id: 48,
    title: 'Hide Scrollbar',
    description: 'Completely hides the browser scrollbar while still allowing scrolling.',
    code: `
body::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}
body {
  -ms-overflow-style: none;  /* for IE and Edge */
  scrollbar-width: none;  /* for Firefox */
}
    `,
    categories: ['Styling', 'Global Styles'],
    version: SquarespaceVersion.V7_0,
    previewHtml: `<div style="font-style: italic; color: #777;">Hides the browser scrollbar.</div>`
  },
  {
    id: 49,
    title: 'Full Height Hero Section',
    description: 'Makes the first section on your page take up the full height of the viewport.',
    code: `
/* Target the first section on a page */
.page-section:first-child {
  min-height: 100vh !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
    `,
    categories: ['Layout', 'Sections'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-style: italic; color: #777;">Makes the first page section full height.</div>`
  },
  {
    id: 50,
    title: 'Card Style for Blog Posts',
    description: 'Styles blog posts in a list to look like modern, clean cards.',
    code: `
.blog-item {
  background: #2d3748; /* gray-800 */
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.blog-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
}
    `,
    categories: ['Blog', 'Styling'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div class="blog-item" style="color: white !important;"><h3>My Blog Post</h3><p>An excerpt of the content...</p></div>`
  },
  {
    id: 51,
    title: 'Accordion/FAQ from Code Block',
    description: 'Creates a functional accordion/FAQ section. Requires using a Code Block with the specified HTML structure.',
    code: `
details {
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}
summary {
  font-weight: 500;
  cursor: pointer;
  padding: 1rem;
  list-style: none; /* Hide default arrow */
}
summary::-webkit-details-marker {
  display: none; /* Hide default arrow for Chrome */
}
details[open] summary {
  background-color: #f0f0f0;
}
.accordion-content {
  padding: 0 1rem 1rem 1rem;
}
    `,
    categories: ['Layout', 'Interactive'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<details><summary>Is this an accordion?</summary><div class="accordion-content"><p>Yes, click another question!</p></div></details>`
  },
  {
    id: 52,
    title: 'Style Sidebar Titles (7.0)',
    description: 'Customizes the titles of blocks within the sidebar on Brine family templates.',
    code: `
.sidebar .sqs-block-content h2 {
  font-size: 1.2rem !important;
  text-transform: uppercase;
  border-bottom: 2px solid #3b82f6;
  padding-bottom: 8px;
}
    `,
    categories: ['Layout', 'Styling'],
    version: SquarespaceVersion.V7_0,
    previewHtml: `<div class="sidebar"><div class="sqs-block-content"><h2 style="margin:0;">Sidebar Title</h2></div></div>`
  },
  {
    id: 53,
    title: 'Image Overlay with Text',
    description: 'Displays text over an image, which appears on hover. Great for portfolios or galleries.',
    code: `
.sqs-block-image .image-overlay {
  opacity: 0;
  transition: opacity 0.3s ease;
  background-color: rgba(0,0,0,0.6);
  /* Add more styling for text inside */
}
.sqs-block-image:hover .image-overlay {
  opacity: 1;
}
    `,
    categories: ['Images', 'Animations'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="position: relative; width: 120px; height: 120px; background: #666; color: white; display: flex; align-items: center; justify-content: center;">Image<div class="image-overlay" style="position: absolute; top:0; left: 0; width: 100%; height: 100%; display:flex; align-items: center; justify-content: center;">Hover Text</div></div>`
  },
  {
    id: 54,
    title: 'Custom List Bullet Points',
    description: 'Replaces the default browser list bullets with a custom icon or emoji.',
    code: `
ul {
  list-style: none;
  padding-left: 0;
}
ul li {
  padding-left: 1.5rem;
  position: relative;
}
ul li::before {
  content: '✓'; /* Or any other character/emoji */
  position: absolute;
  left: 0;
  color: #3b82f6; /* Your color */
}
    `,
    categories: ['Typography', 'Styling'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<ul><li>First item</li><li>Second item</li></ul>`
  },
  {
    id: 55,
    title: 'Hide Sidebar on One Page (7.0)',
    description: 'Uses the unique collection ID to hide the sidebar on a specific page.',
    code: `
.collection-id-goes-here #sidebar-one {
  display: none !important;
}
/* Also hide the main content's padding */
.collection-id-goes-here #main-content {
  padding-left: 0 !important;
}
    `,
    categories: ['Layout', 'Pages'],
    version: SquarespaceVersion.V7_0,
    previewHtml: `<div style="font-style: italic; color: #777;">Hides sidebar on a target page.</div>`
  },
  {
    id: 56,
    title: 'Animated Gradient Border',
    description: 'Adds a beautiful, animated gradient border to a specific block or section.',
    code: `
@keyframes animated-border {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
#your-block-id {
  position: relative;
  background: #111827; /* Your block BG color */
  padding: 4px;
}
#your-block-id::before {
  content: '';
  position: absolute;
  top: -2px; left: -2px;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
  background-size: 300% 300%;
  z-index: -1;
  animation: animated-border 4s ease infinite;
  border-radius: 8px; /* Match your block's border-radius */
}
    `,
    categories: ['Animations', 'Styling'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div id="your-block-id" style="z-index: 1; border-radius: 8px;"><div style="background: #111827; padding: 1rem; border-radius: 6px; color: white;">Look at my border!</div></div>`
  },
  {
    id: 57,
    title: 'Feature First Blog Post',
    description: 'In a blog grid, this makes the very first (most recent) post span two columns, highlighting it.',
    code: `
.blog-layout-grid .blog-item:first-child {
  grid-column: span 2;
  grid-row: span 2; /* Optional */
}
/* Add media query to disable on mobile */
@media screen and (max-width: 767px) {
  .blog-layout-grid .blog-item:first-child {
    grid-column: span 1;
    grid-row: span 1;
  }
}
    `,
    categories: ['Blog', 'Layout'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-style: italic; color: #777;">Makes first blog post larger in a grid.</div>`
  },
  {
    id: 58,
    title: 'Full Bleed Footer (7.0 - Brine)',
    description: 'Stretches the footer content blocks to the full browser width in the Brine template family.',
    code: `
#footer-sections {
  max-width: 100% !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
}
    `,
    categories: ['Header & Footer', 'Layout'],
    version: SquarespaceVersion.V7_0,
    previewHtml: `<div style="font-style: italic; color: #777;">Expands footer to full width on Brine.</div>`
  },
  {
    id: 59,
    title: 'Style Newsletter Placeholder',
    description: 'Customizes the placeholder text color and style within the newsletter block.',
    code: `
.newsletter-form-field-element::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #ef4444 !important;
  font-style: italic;
}
.newsletter-form-field-element::-moz-placeholder { /* Firefox 19+ */
  color: #ef4444 !important;
  font-style: italic;
  opacity: 1;
}
    `,
    categories: ['Forms', 'Styling'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<input type="email" placeholder="Custom placeholder" class="newsletter-form-field-element" style="padding: 8px; border: 1px solid #ccc;"/>`
  },
  {
    id: 60,
    title: 'Style Cookie Banner',
    description: 'Applies a custom background and button style to the Squarespace cookie banner.',
    code: `
.sqs-cookie-banner-v2 {
  background-color: #1f2937 !important; /* gray-800 */
  border-top: 2px solid #3b82f6 !important;
}
.sqs-cookie-banner-v2 p {
  color: #e5e7eb !important; /* gray-200 */
}
.sqs-cookie-banner-v2 .sqs-cookie-banner-v2-accept-button {
  background-color: #3b82f6 !important;
  color: white !important;
  border-radius: 4px;
}
    `,
    categories: ['Styling', 'Global Styles'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div class="sqs-cookie-banner-v2" style="padding: 1rem; display: flex; justify-content: space-between; align-items: center;"><p style="margin: 0;">This is a custom cookie banner.</p><button class="sqs-cookie-banner-v2-accept-button" style="padding: 0.5rem 1rem; border: none;">Accept</button></div>`
  },
  {
    id: 61,
    title: 'Vertical Text Block',
    description: 'Rotates the text within a specific block to display vertically. Ideal for side labels or creative layouts.',
    code: `
#your-block-id .sqs-block-content {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-align: right;
}
    `,
    categories: ['Typography', 'Layout'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div id="your-block-id"><div class="sqs-block-content" style="border: 1px solid #ccc; padding: 5px;">Vertical</div></div>`
  },
  {
    id: 62,
    title: 'Parallax Background Image',
    description: 'Creates a parallax (fixed) background image effect for a page section.',
    code: `
#your-section-id .section-background img {
  object-fit: cover;
}

#your-section-id {
  background-attachment: fixed !important;
}
    `,
    categories: ['Images', 'Animations'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-style: italic; color: #777;">Creates a scrolling parallax effect on a section background.</div>`
  },
  {
    id: 63,
    title: 'Remove Brine Index Padding (7.0)',
    description: 'Removes the default top and bottom padding from Index pages in the Brine family for true edge-to-edge sections.',
    code: `
.index-section {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
    `,
    categories: ['Layout', 'Pages'],
    version: SquarespaceVersion.V7_0,
    previewHtml: `<div style="font-style: italic; color: #777;">Removes padding from Brine Index pages.</div>`
  },
  {
    id: 64,
    title: 'Style Form Success Message',
    description: 'Customizes the appearance of the "Thank you" message after a form is successfully submitted.',
    code: `
.form-submission-text {
  background-color: #dcfce7 !important; /* green-100 */
  color: #166534 !important; /* green-800 */
  border: 1px solid #4ade80 !important; /* green-400 */
  padding: 1.5rem !important;
  border-radius: 8px;
}
    `,
    categories: ['Forms', 'Styling'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div class="form-submission-text">Thank you for your submission!</div>`
  },
  {
    id: 65,
    title: 'Bouncing "Scroll Down" Arrow',
    description: 'Adds an animated, bouncing arrow to a block to encourage users to scroll. Best used with an icon block.',
    code: `
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}
#your-arrow-block-id {
  animation: bounce 2s infinite;
}
    `,
    categories: ['Animations', 'Layout'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div id="your-arrow-block-id" style="font-size: 2rem;">↓</div>`
  },
  {
    id: 66,
    title: '"Read More" Button for Blog',
    description: 'Styles the "Read More" link on blog excerpts to look like a clean, modern button.',
    code: `
.blog-item-read-more-link a {
  display: inline-block;
  background: transparent;
  border: 1px solid #4b5563; /* gray-600 */
  color: #d1d5db; /* gray-300 */
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
}
.blog-item-read-more-link a:hover {
  background: #4b5563;
  color: white;
}
    `,
    categories: ['Blog', 'Buttons'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div class="blog-item-read-more-link"><a href="#">Read More</a></div>`
  },
  {
    id: 67,
    title: 'Hide Blog Post Date',
    description: 'Removes the date from all blog posts for a cleaner, more evergreen look.',
    code: `
.blog-item-meta-date {
  display: none !important;
}
    `,
    categories: ['Blog', 'Layout'],
    version: SquarespaceVersion.V7_0,
    previewHtml: `<div style="font-style: italic; color: #777;">The blog post date would be hidden.</div>`
  },
  {
    id: 68,
    title: 'Hide "Quantity" on Product Pages',
    description: 'Removes the quantity selector from product pages. Useful for services or single-purchase items.',
    code: `
.product-quantity-input {
  display: none !important;
}
    `,
    categories: ['Shop', 'Products'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-style: italic; color: #777;">Hides the quantity input on products.</div>`
  },
  {
    id: 69,
    title: 'Style Active Navigation Link',
    description: 'Adds a distinct style to the navigation link of the page the user is currently on.',
    code: `
.header-nav-item--active a {
  color: #3b82f6 !important;
  text-decoration: underline !important;
  text-underline-offset: 4px;
}
    `,
    categories: ['Navigation', 'Styling'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<a href="#" class="header-nav-item--active" style="font-weight: bold;">Active Link</a>`
  },
  {
    id: 70,
    title: 'Fixed "Back to Top" Button',
    description: 'Adds a "Back to Top" button that appears on scroll and stays in a fixed position.',
    code: `
/* Add to Footer Code Injection */
<a href="#" id="back-to-top" style="display:none;">↑</a>
<script>
  window.addEventListener('scroll', function() {
    var btn = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });
</script>

/* Add to Custom CSS */
#back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #3b82f6;
  color: white;
  padding: 10px 15px;
  border-radius: 50%;
  text-decoration: none;
  z-index: 1000;
}
    `,
    categories: ['Navigation', 'Interactive'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-style: italic; color: #777;">Requires code injection. Button appears on scroll.</div>`
  },
  {
    id: 71,
    title: 'Increase Logo Size (7.1)',
    description: 'Allows you to increase the size of your logo beyond the default slider limits.',
    code: `
.header-title-logo img {
  max-height: 100px !important; /* Adjust value */
}
    `,
    categories: ['Header & Footer', 'Styling'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-style: italic; color: #777;">Increases the max height of the site logo.</div>`
  },
  {
    id: 72,
    title: 'Hide Header until Scroll Up',
    description: 'Hides the header when scrolling down and reveals it when scrolling up for a cleaner reading experience.',
    code: `
/* Add to Header Code Injection */
<script>
var lastScrollTop = 0;
var header = document.getElementById('header');
window.addEventListener("scroll", function(){
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop && st > 100){
      header.style.top = "-200px"; // Hides header
   } else {
      header.style.top = "0"; // Shows header
   }
   lastScrollTop = st <= 0 ? 0 : st;
}, false);
</script>

/* Add to Custom CSS */
#header {
  position: sticky !important;
  top: 0;
  transition: top 0.3s ease-in-out;
}
    `,
    categories: ['Header & Footer', 'Interactive'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-style: italic; color: #777;">Header hides on scroll down, appears on scroll up.</div>`
  },
  {
    id: 73,
    title: 'Change Mobile Menu "Burger" Icon',
    description: 'Replaces the default three-line burger icon with a custom SVG icon.',
    code: `
.header-burger-icon .icon-burger {
  display: none; /* Hide original icon */
}
.header-burger-icon::before {
  content: '';
  display: block;
  width: 24px;
  height: 24px;
  background-image: url('YOUR_SVG_URL_HERE');
  background-size: contain;
}
    `,
    categories: ['Navigation', 'Styling'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-style: italic; color: #777;">Replaces the default mobile menu icon.</div>`
  },
  {
    id: 74,
    title: 'Style "Sold Out" Badge',
    description: 'Customizes the appearance of the "Sold Out" badge on products.',
    code: `
.product-mark.sold-out {
  background-color: #4b5563 !important; /* gray-600 */
  color: white !important;
  font-weight: normal !important;
  letter-spacing: 1px;
  text-transform: uppercase;
}
    `,
    categories: ['Shop', 'Styling'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div class="product-mark sold-out" style="padding: 4px 8px; display: inline-block;">Sold Out</div>`
  },
  {
    id: 75,
    title: 'Underline From Center Hover',
    description: 'Creates a stylish hover effect where an underline grows from the center of a link.',
    code: `
a.animated-underline {
  position: relative;
  text-decoration: none;
}
a.animated-underline::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: #3b82f6;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out;
}
a.animated-underline:hover::before {
  visibility: visible;
  transform: scaleX(1);
}
    `,
    categories: ['Animations', 'Typography'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<a href="#" class="animated-underline" style="color: var(--text-color);">Hover for effect</a>`
  },
  {
    id: 76,
    title: 'Alternating Section Colors',
    description: 'Automatically applies different background colors to alternating page sections for visual separation.',
    code: `
.page-section:nth-child(even) {
  background-color: #f3f4f6 !important; /* A light gray */
}
/* You can also target content colors */
.page-section:nth-child(even) .sqs-html-content {
  color: #1f2937; /* A dark gray for text */
}
    `,
    categories: ['Layout', 'Sections'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-style: italic; color: #777;">Creates a zebra-stripe effect for sections.</div>`
  },
  {
    id: 77,
    title: 'Ken Burns Pan/Zoom on Banners',
    description: 'Adds a slow, subtle panning and zooming effect to banner images.',
    code: `
@keyframes kenburns {
  0% {
    transform: scale(1) translate(0, 0);
  }
  100% {
    transform: scale(1.1) translate(-2%, 2%);
  }
}
.section-background img {
  animation: kenburns 20s ease-out infinite alternate;
}
    `,
    categories: ['Animations', 'Images'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-style: italic; color: #777;">Adds a slow pan/zoom effect to banner images.</div>`
  },
  {
    id: 78,
    title: 'Style Form Error Messages',
    description: 'Customizes the look of error messages when a user fills out a form incorrectly.',
    code: `
.form-item.has-error .field-error {
  background-color: #fee2e2 !important; /* red-100 */
  color: #991b1b !important; /* red-800 */
  padding: 10px !important;
  border-radius: 4px;
  margin-top: 5px;
  display: block;
}
.form-item.has-error .field-element {
  border-color: #ef4444 !important; /* red-500 */
}
    `,
    categories: ['Forms', 'Styling'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div class="form-item has-error"><div class="field-error">This field is required.</div></div>`
  },
  {
    id: 79,
    title: 'Add Icon to Navigation Link',
    description: 'Adds a small icon (using a background image) before a specific navigation link.',
    code: `
/* Find the navigation item's unique ID */
.header-nav-item a[href="/contact"] {
  padding-left: 28px !important;
  background-image: url('YOUR_ICON_URL_HERE');
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 18px 18px;
}
    `,
    categories: ['Navigation', 'Styling'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<a href="#" style="background: url('https://www.svgrepo.com/show/522396/mail.svg') no-repeat left center; background-size: 16px; padding-left: 22px;">Contact</a>`
  },
  {
    id: 80,
    title: 'Card Style for Summary Block',
    description: 'Turns items in a Summary Block into modern, stylish cards with hover effects.',
    code: `
.summary-item {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.summary-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}
.summary-thumbnail-container {
  border-bottom: 1px solid #e5e7eb;
}
.summary-content {
  padding: 1.5rem;
}
    `,
    categories: ['Summaries', 'Styling'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div class="summary-item" style="max-width: 200px;"><div class="summary-content" style="text-align: left;"><h3 style="margin: 0;">Card Title</h3><p>Content goes here.</p></div></div>`
  },
    {
    id: 81,
    title: 'Full Width Code Block',
    description: 'Makes a code block break out of the main content container and span the full width of the page.',
    code: `
#your-code-block-id {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  max-width: none !important;
}
    `,
    categories: ['Layout', 'Styling'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-style: italic; color: #777;">Expands a code block to full browser width.</div>`
  },
  {
    id: 82,
    title: 'Change Video Block Play Icon',
    description: 'Replaces the default play icon on video blocks with a custom image or SVG.',
    code: `
.sqs-video-icon {
  background-image: none !important; /* Remove default */
  width: 80px;
  height: 80px;
}
.sqs-video-icon:before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background-image: url('YOUR_CUSTOM_ICON_URL');
  background-size: contain;
  background-repeat: no-repeat;
}
    `,
    categories: ['Video', 'Styling'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-style: italic; color: #777;">Replaces the default video play button.</div>`
  },
  {
    id: 83,
    title: 'Remove Padding from Mobile Sections',
    description: 'Removes the left and right padding from all sections on mobile for an edge-to-edge look.',
    code: `
@media screen and (max-width: 767px) {
  .page-section .content-wrapper {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}
    `,
    categories: ['Responsive', 'Sections'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-style: italic; color: #777;">Removes side padding on mobile.</div>`
  },
  {
    id: 84,
    title: 'Neon Glow Text Effect',
    description: 'Adds a glowing, neon-like effect to headings.',
    code: `
h1.neon-text {
  color: #fff;
  text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px #0fa,
    0 0 82px #0fa,
    0 0 92px #0fa,
    0 0 102px #0fa,
    0 0 151px #0fa;
}
    `,
    categories: ['Typography', 'Animations'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<h1 class="neon-text" style="font-size: 2rem; font-weight: 700;">NEON</h1>`
  },
  {
    id: 85,
    title: 'Change Index Scroller Arrow (7.0)',
    description: 'Customizes the appearance of the arrow used for scrolling between Index Page sections in the Brine family.',
    code: `
.index-scroll-arrow {
  border-color: #3b82f6 !important;
}
.index-scroll-arrow:hover {
  background-color: #3b82f6 !important;
}
.index-scroll-arrow .arrow {
  fill: #3b82f6 !important;
}
.index-scroll-arrow:hover .arrow {
  fill: #fff !important;
}
    `,
    categories: ['Navigation', 'Styling'],
    version: SquarespaceVersion.V7_0,
    previewHtml: `<div style="font-style: italic; color: #777;">Styles the Index Page scroll arrow on Brine.</div>`
  },
  {
    id: 86,
    title: 'Hide Site Title (Keep for SEO)',
    description: 'Makes the site title invisible to visitors but keeps it in the HTML for search engines.',
    code: `
.header-title-text a {
  text-indent: -9999px;
  display: block;
}
    `,
    categories: ['Header & Footer', 'Layout'],
    version: SquarespaceVersion.V7_0,
    previewHtml: `<div style="font-style: italic; color: #777;">Hides site title visually but not for SEO.</div>`
  },
  {
    id: 87,
    title: 'Add Divider Between Blog Posts',
    description: 'Adds a styled horizontal line between posts on a blog list page.',
    code: `
.blog-item + .blog-item {
  border-top: 1px solid #4b5563; /* gray-600 */
  padding-top: 2.5rem;
  margin-top: 2.5rem;
}
    `,
    categories: ['Blog', 'Styling'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="text-align: left;"><div class="blog-item"><h3>Post 1</h3></div><div class="blog-item" style="border-top: 1px solid #ccc; padding-top: 1rem; margin-top: 1rem;"><h3>Post 2</h3></div></div>`
  },
  {
    id: 88,
    title: 'Image Shape with Clip-Path',
    description: 'Crops image blocks into a custom shape (e.g., a hexagon) using clip-path.',
    code: `
#your-image-block-id .sqs-block-image img {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}
    `,
    categories: ['Images', 'Styling'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div id="your-image-block-id" style="width: 100px; height: 100px;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg==" class="sqs-block-image" style="width: 100px; height: 100px; background: #3b82f6;" /></div>`
  },
  {
    id: 89,
    title: 'Two-Column Footer Layout (7.1)',
    description: 'Forces footer content blocks into a two-column layout on desktop.',
    code: `
@media screen and (min-width: 768px) {
  .footer-blocks[data-layout-region="footer"] .sqs-layout .sqs-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  .footer-blocks[data-layout-region="footer"] .sqs-layout .sqs-col-12 {
    grid-column: span 1 !important;
    width: 100% !important;
  }
}
    `,
    categories: ['Header & Footer', 'Layout'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-style: italic; color: #777;">Arranges footer blocks into two columns.</div>`
  },
  {
    id: 90,
    title: 'Style Archive Block Links',
    description: 'Customizes the links within an Archive Block for a more integrated look.',
    code: `
.sqs-block-archive .archive-group-list-item a {
  padding: 10px;
  background-color: #374151; /* gray-700 */
  border-radius: 4px;
  margin-bottom: 5px;
  display: block;
  transition: background-color 0.2s;
}
.sqs-block-archive .archive-group-list-item a:hover {
  background-color: #4b5563; /* gray-600 */
}
    `,
    categories: ['Styling', 'Blog'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div><a class="archive-group-list-item" href="#" style="text-decoration: none; color: white;">Archive Link</a></div>`
  },
  {
    id: 91,
    title: 'Animate Form Field Labels',
    description: 'Makes form field labels float up when the user starts typing.',
    code: `
.form-item {
  position: relative;
}
.form-item .title {
  position: absolute;
  top: 12px;
  left: 12px;
  transition: all 0.2s ease;
  pointer-events: none;
  background: white; /* Match form bg */
  padding: 0 4px;
}
.form-item .field-element:focus + .title,
.form-item .field-element:not(:placeholder-shown) + .title {
  top: -10px;
  font-size: 0.8rem;
  color: #3b82f6;
}
    `,
    categories: ['Forms', 'Animations'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-style: italic; color: #777;">Requires form labels to be visible.</div>`
  },
  {
    id: 92,
    title: 'Image Accordion on Hover',
    description: 'Creates a horizontal accordion effect with images that expand on hover. Requires specific block structure.',
    code: `
.image-accordion { display: flex; }
.image-accordion .image-item {
  flex: 1;
  height: 200px;
  background-size: cover;
  background-position: center;
  transition: flex 0.5s ease;
}
.image-accordion:hover .image-item:hover {
  flex: 5; /* Expands this item */
}
    `,
    categories: ['Images', 'Interactive'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-style: italic; color: #777;">Requires a Code Block with custom HTML.</div>`
  },
  {
    id: 93,
    title: 'Change Color of Selected Text',
    description: 'Customizes the background color and text color when a user highlights text on your site.',
    code: `
::selection {
  background: #fde047; /* yellow-300 */
  color: #78350f; /* yellow-900 */
}
::-moz-selection {
  background: #fde047;
  color: #78350f;
}
    `,
    categories: ['Global Styles', 'Styling'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<p>Try selecting this text to see the effect.</p>`
  },
  {
    id: 94,
    title: 'Page Transition Fade Effect',
    description: 'Adds a simple fade-out/fade-in effect when navigating between pages.',
    code: `
/* Fade out */
body.fade-out {
  opacity: 0;
  transition: opacity 0.4s ease;
}
/* Fade in */
body {
  opacity: 1;
  transition: opacity 0.4s ease;
}
/* Add to Footer Code Injection */
<script>
  document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
  });
  window.addEventListener('beforeunload', () => {
    document.body.classList.add('fade-out');
  });
</script>
    `,
    categories: ['Animations', 'Global Styles'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-style: italic; color: #777;">Adds a fade transition between pages.</div>`
  },
  {
    id: 95,
    title: 'Split Text Color Heading',
    description: 'Splits a heading into two different colors using a pseudo-element.',
    code: `
h1.split-color {
  position: relative;
  display: inline-block;
}
h1.split-color span {
  position: relative;
  color: #3b82f6; /* Second color */
  z-index: 1;
}
h1.split-color::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 50%; /* Adjust split percentage */
  white-space: nowrap;
  overflow: hidden;
  color: #1f2937; /* First color */
  z-index: 2;
}
    `,
    categories: ['Typography', 'Styling'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<h1 class="split-color" data-text="Split Heading"><span>Split Heading</span></h1>`
  },
  {
    id: 96,
    title: 'Strikethrough on Link Hover',
    description: 'Adds a simple strikethrough effect to links when hovered.',
    code: `
a.strikethrough-hover {
  text-decoration: none;
  position: relative;
}
a.strikethrough-hover:hover {
  text-decoration: line-through;
}
    `,
    categories: ['Typography', 'Animations'],
    version: SquarespaceVersion.V7_0,
    previewHtml: `<a href="#" class="strikethrough-hover">Hover me</a>`
  },
  {
    id: 97,
    title: 'Tilted Section',
    description: 'Tilts an entire page section for a dynamic, angled look.',
    code: `
#your-tilted-section {
  transform: rotate(-2deg);
  margin-top: 50px;
  margin-bottom: 50px;
}
/* Add a container to straighten content inside */
#your-tilted-section .content-wrapper {
  transform: rotate(2deg);
}
    `,
    categories: ['Layout', 'Sections'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="border: 2px solid #ccc; transform: rotate(-2deg); padding: 1rem;">This section is tilted.</div>`
  },
  {
    id: 98,
    title: 'Remove "View All" in Blog List',
    description: 'Hides the "View All" link that appears at the bottom of blog list pages.',
    code: `
.blog-more-link {
  display: none !important;
}
    `,
    categories: ['Blog', 'Layout'],
    version: SquarespaceVersion.V7_0,
    previewHtml: `<div style="font-style: italic; color: #777;">Hides the View All link on blog pages.</div>`
  },
  {
    id: 99,
    title: 'Change Product Image Gallery Style',
    description: 'Styles the thumbnails in a product image gallery (e.g., adding a border to the active thumbnail).',
    code: `
.product-gallery-thumbnails .slide.sqs-active-slide img {
  border: 2px solid #3b82f6 !important;
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
}
    `,
    categories: ['Shop', 'Styling'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-style: italic; color: #777;">Adds a border to the active product thumbnail.</div>`
  },
  {
    id: 100,
    title: 'Animated Social Icons on Hover',
    description: 'Adds a simple animation to social media icons, making them slightly larger on hover.',
    code: `
.social-icons-style-regular .sqs-svg-icon--wrapper {
  transition: transform 0.2s ease-in-out;
}
.social-icons-style-regular .sqs-svg-icon--wrapper:hover {
  transform: scale(1.2);
}
    `,
    categories: ['Social', 'Animations'],
    version: SquarespaceVersion.V7_1,
    previewHtml: `<div style="font-size: 24px; display: inline-block;" class="sqs-svg-icon--wrapper">◉</div>`
  }
];
