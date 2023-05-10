# bootstrap-table (for customization porpuse)
bootstrap table scss include functions variables and mixin

## Variables

```// A list of pre-calculated numbers of pow(divide((divide($value, 255) + .055), 1.055), 2.4). (from 0 to 255)
// stylelint-disable-next-line scss/dollar-variable-default, scss/dollar-variable-pattern
$_luminance-list: .0008 .001 .0011 .0013 .0015 .0017 .002 .0022 .0025 .0027 .003 .0033 .0037 .004 .0044 .0048 .0052 .0056 .006 .0065 .007 .0075 .008 .0086 .0091 .0097 .0103 .011 .0116 .0123 .013 .0137 .0144 .0152 .016 .0168 .0176 .0185 .0194 .0203 .0212 .0222 .0232 .0242 .0252 .0262 .0273 .0284 .0296 .0307 .0319 .0331 .0343 .0356 .0369 .0382 .0395 .0409 .0423 .0437 .0452 .0467 .0482 .0497 .0513 .0529 .0545 .0561 .0578 .0595 .0612 .063 .0648 .0666 .0685 .0704 .0723 .0742 .0762 .0782 .0802 .0823 .0844 .0865 .0887 .0908 .0931 .0953 .0976 .0999 .1022 .1046 .107 .1095 .1119 .1144 .117 .1195 .1221 .1248 .1274 .1301 .1329 .1356 .1384 .1413 .1441 .147 .15 .1529 .1559 .159 .162 .1651 .1683 .1714 .1746 .1779 .1812 .1845 .1878 .1912 .1946 .1981 .2016 .2051 .2086 .2122 .2159 .2195 .2232 .227 .2307 .2346 .2384 .2423 .2462 .2502 .2542 .2582 .2623 .2664 .2705 .2747 .2789 .2831 .2874 .2918 .2961 .3005 .305 .3095 .314 .3185 .3231 .3278 .3325 .3372 .3419 .3467 .3515 .3564 .3613 .3663 .3712 .3763 .3813 .3864 .3916 .3968 .402 .4072 .4125 .4179 .4233 .4287 .4342 .4397 .4452 .4508 .4564 .4621 .4678 .4735 .4793 .4851 .491 .4969 .5029 .5089 .5149 .521 .5271 .5333 .5395 .5457 .552 .5583 .5647 .5711 .5776 .5841 .5906 .5972 .6038 .6105 .6172 .624 .6308 .6376 .6445 .6514 .6584 .6654 .6724 .6795 .6867 .6939 .7011 .7084 .7157 .7231 .7305 .7379 .7454 .7529 .7605 .7682 .7758 .7835 .7913 .7991 .807 .8148 .8228 .8308 .8388 .8469 .855 .8632 .8714 .8796 .8879 .8963 .9047 .9131 .9216 .9301 .9387 .9473 .956 .9647 .9734 .9823 .9911 1;

// ---------------------------------------------------------
$border-width:                1px !default;

$white:    #fff !default;
$gray-100: #f8f9fa !default;
$gray-600: #6c757d !default;
$gray-900: #212529 !default;
$black:    #000 !default;

$text-muted:                  $gray-600 !default;

$blue:    #0d6efd !default;
$green:   #198754 !default;
$red:     #dc3545 !default;
$yellow:  #ffc107 !default;
$cyan:    #0dcaf0 !default;

// scss-docs-start theme-color-variables
$primary:       $blue !default;
$secondary:     $gray-600 !default;
$success:       $green !default;
$info:          $cyan !default;
$warning:       $yellow !default;
$danger:        $red !default;
$light:         $gray-100 !default;
$dark:          $gray-900 !default;
// Prefix for :root CSS variables
$spacer: 1rem !default;
$body-bg:                   $white !default;

$variable-prefix:             bs- !default; // Deprecated in v5.2.0 for the shorter `$prefix`
$prefix:                      $variable-prefix !default;

$min-contrast-ratio:   4.5 !default;
$color-contrast-dark:      $black !default;
$color-contrast-light:     $white !default;

$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
) !default;
// Tables
//
// Customizes the `.table` component with basic values, each used across all table variations.

// scss-docs-start table-variables
$table-cell-padding-y:        .5rem !default;
$table-cell-padding-x:        .5rem !default;
$table-cell-padding-y-sm:     .25rem !default;
$table-cell-padding-x-sm:     .25rem !default;

$table-cell-vertical-align:   top !default;

$table-color:                 var(--#{$prefix}body-color) !default;
$table-bg:                    transparent !default;
$table-accent-bg:             transparent !default;

$table-th-font-weight:        null !default;

$table-striped-color:         $table-color !default;
$table-striped-bg-factor:     .05 !default;
$table-striped-bg:            rgba($black, $table-striped-bg-factor) !default;

$table-active-color:          $table-color !default;
$table-active-bg-factor:      .1 !default;
$table-active-bg:             rgba($black, $table-active-bg-factor) !default;

$table-hover-color:           $table-color !default;
$table-hover-bg-factor:       .075 !default;
$table-hover-bg:              rgba($black, $table-hover-bg-factor) !default;

$table-border-factor:         .1 !default;
$table-border-width:          $border-width !default;
$table-border-color:          var(--#{$prefix}border-color) !default;

$table-striped-order:         odd !default;
$table-striped-columns-order: even !default;

$table-group-separator-color: currentcolor !default;

$table-caption-color:         $text-muted !default;

$table-bg-scale:              -80% !default;
// scss-docs-end table-variables

// scss-docs-start table-loop
$table-variants: (
  "primary":    shift-color($primary, $table-bg-scale),
  "secondary":  shift-color($secondary, $table-bg-scale),
  "success":    shift-color($success, $table-bg-scale),
  "info":       shift-color($info, $table-bg-scale),
  "warning":    shift-color($warning, $table-bg-scale),
  "danger":     shift-color($danger, $table-bg-scale),
  "light":      $light,
  "dark":       $dark,
) !default;
// scss-docs-end table-loop

```
## Functions

```
// scss-docs-start color-functions
// Tint a color: mix a color with white
@function tint-color($color, $weight) {
  @return mix(white, $color, $weight);
}

// Shade a color: mix a color with black
@function shade-color($color, $weight) {
  @return mix(black, $color, $weight);
}

// Shade the color if the weight is positive, else tint it
@function shift-color($color, $weight) {
  @return if($weight > 0, shade-color($color, $weight), tint-color($color, -$weight));
}
@function divide($dividend, $divisor, $precision: 10) {
    $sign: if($dividend > 0 and $divisor > 0 or $dividend < 0 and $divisor < 0, 1, -1);
    $dividend: abs($dividend);
    $divisor: abs($divisor);
    @if $dividend == 0 {
      @return 0;
    }
    @if $divisor == 0 {
      @error "Cannot divide by 0";
    }
    $remainder: $dividend;
    $result: 0;
    $factor: 10;
    @while ($remainder > 0 and $precision >= 0) {
      $quotient: 0;
      @while ($remainder >= $divisor) {
        $remainder: $remainder - $divisor;
        $quotient: $quotient + 1;
      }
      $result: $result * 10 + $quotient;
      $factor: $factor * .1;
      $remainder: $remainder * 10;
      $precision: $precision - 1;
      @if ($precision < 0 and $remainder >= $divisor * 5) {
        $result: $result + 1;
      }
    }
    $result: $result * $factor * $sign;
    $dividend-unit: unit($dividend);
    $divisor-unit: unit($divisor);
    $unit-map: (
      "px": 1px,
      "rem": 1rem,
      "em": 1em,
      "%": 1%
    );
    @if ($dividend-unit != $divisor-unit and map-has-key($unit-map, $dividend-unit)) {
      $result: $result * map-get($unit-map, $dividend-unit);
    }
    @return $result;
  }
  


@function color-contrast($background, $color-contrast-dark: $color-contrast-dark, $color-contrast-light: $color-contrast-light, $min-contrast-ratio: $min-contrast-ratio) {
    $foregrounds: $color-contrast-light, $color-contrast-dark, $white, $black;
    $max-ratio: 0;
    $max-ratio-color: null;
  
    @each $color in $foregrounds {
      $contrast-ratio: contrast-ratio($background, $color);
      @if $contrast-ratio > $min-contrast-ratio {
        @return $color;
      } @else if $contrast-ratio > $max-ratio {
        $max-ratio: $contrast-ratio;
        $max-ratio-color: $color;
      }
    }
  
    @warn "Found no color leading to #{$min-contrast-ratio}:1 contrast ratio against #{$background}...";
  
    @return $max-ratio-color;
  }
  @function luminance($color) {
    $rgb: (
      "r": red($color),
      "g": green($color),
      "b": blue($color)
    );
  
    @each $name, $value in $rgb {
      $value: if(divide($value, 255) < .03928, divide(divide($value, 255), 12.92), nth($_luminance-list, $value + 1));
      $rgb: map-merge($rgb, ($name: $value));
    }
  
    @return (map-get($rgb, "r") * .2126) + (map-get($rgb, "g") * .7152) + (map-get($rgb, "b") * .0722);
  }
  
  @function contrast-ratio($background, $foreground: $color-contrast-light) {
    $l1: luminance($background);
    $l2: luminance(opaque($background, $foreground));
  
    @return if($l1 > $l2, divide($l1 + .05, $l2 + .05), divide($l2 + .05, $l1 + .05));
  }

  // Return opaque color
// opaque(#fff, rgba(0, 0, 0, .5)) => #808080
@function opaque($background, $foreground) {
    // @debug 'shayan ghazali' + $foreground;
    @return mix(rgba($foreground, 1), $background, opacity($foreground) * 100%);
  }

  

// Minimum breakpoint width. Null for the smallest (first) breakpoint.
//
//    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1400px))
//    576px
@function breakpoint-min($name, $breakpoints: $grid-breakpoints) {
  $min: map-get($breakpoints, $name);
  @return if($min != 0, $min, null);
}


// Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.
// Useful for making responsive utilities.
//
//    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1400px))
//    ""  (Returns a blank string)
//    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1400px))
//    "-sm"
@function breakpoint-infix($name, $breakpoints: $grid-breakpoints) {
  @return if(breakpoint-min($name, $breakpoints) == null, "", "-#{$name}");
}
// Maximum breakpoint width.
// The maximum value is reduced by 0.02px to work around the limitations of
// `min-` and `max-` prefixes and viewports with fractional widths.
// See https://www.w3.org/TR/mediaqueries-4/#mq-min-max
// Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.
// See https://bugs.webkit.org/show_bug.cgi?id=178261
//
//    >> breakpoint-max(md, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1400px))
//    767.98px
@function breakpoint-max($name, $breakpoints: $grid-breakpoints) {
  $max: map-get($breakpoints, $name);
  @return if($max and $max > 0, $max - .02, null);
}

```
## Mixins

```
  // Media of at most the maximum breakpoint width. No query for the largest breakpoint.
  // Makes the @content apply to the given breakpoint and narrower.
  @mixin media-breakpoint-down($name, $breakpoints: $grid-breakpoints) {
    $max: breakpoint-max($name, $breakpoints);
    @if $max {
      @media (max-width: $max) {
        @content;
      }
    } @else {
      @content;
    }
  }

// scss-docs-start table-variant
@mixin table-variant($state, $background) {
    .table-#{$state} {
      $color: color-contrast(opaque($body-bg, $background));
      $hover-bg: mix($color, $background, percentage($table-hover-bg-factor));
      $striped-bg: mix($color, $background, percentage($table-striped-bg-factor));
      $active-bg: mix($color, $background, percentage($table-active-bg-factor));
      $table-border-color: mix($color, $background, percentage($table-border-factor));
  
      --#{$prefix}table-color: #{$color};
      --#{$prefix}table-bg: #{$background};
      --#{$prefix}table-border-color: #{$table-border-color};
      --#{$prefix}table-striped-bg: #{$striped-bg};
      --#{$prefix}table-striped-color: #{color-contrast($striped-bg)};
      --#{$prefix}table-active-bg: #{$active-bg};
      --#{$prefix}table-active-color: #{color-contrast($active-bg)};
      --#{$prefix}table-hover-bg: #{$hover-bg};
      --#{$prefix}table-hover-color: #{color-contrast($hover-bg)};
  
      color: var(--#{$prefix}table-color);
      border-color: var(--#{$prefix}table-border-color);
    }
  }
  // scss-docs-end table-variant
  
```
## Base Styles

```
  
//
// Basic Bootstrap table
//

.table {
    --#{$prefix}table-color: #{$table-color};
    --#{$prefix}table-bg: #{$table-bg};
    --#{$prefix}table-border-color: #{$table-border-color};
    --#{$prefix}table-accent-bg: #{$table-accent-bg};
    --#{$prefix}table-striped-color: #{$table-striped-color};
    --#{$prefix}table-striped-bg: #{$table-striped-bg};
    --#{$prefix}table-active-color: #{$table-active-color};
    --#{$prefix}table-active-bg: #{$table-active-bg};
    --#{$prefix}table-hover-color: #{$table-hover-color};
    --#{$prefix}table-hover-bg: #{$table-hover-bg};
  
    width: 100%;
    margin-bottom: $spacer;
    color: var(--#{$prefix}table-color);
    vertical-align: $table-cell-vertical-align;
    border-color: var(--#{$prefix}table-border-color);
  
    // Target th & td
    // We need the child combinator to prevent styles leaking to nested tables which doesn't have a `.table` class.
    // We use the universal selectors here to simplify the selector (else we would need 6 different selectors).
    // Another advantage is that this generates less code and makes the selector less specific making it easier to override.
    // stylelint-disable-next-line selector-max-universal
    > :not(caption) > * > * {
      padding: $table-cell-padding-y $table-cell-padding-x;
      background-color: var(--#{$prefix}table-bg);
      border-bottom-width: $table-border-width;
      box-shadow: inset 0 0 0 9999px var(--#{$prefix}table-accent-bg);
    }
  
    > tbody {
      vertical-align: inherit;
    }
  
    > thead {
      vertical-align: bottom;
    }
  }
  
  .table-group-divider {
    border-top: ($table-border-width * 2) solid $table-group-separator-color;
  }
  
  //
  // Change placement of captions with a class
  //
  
  .caption-top {
    caption-side: top;
  }
  
  
  //
  // Condensed table w/ half padding
  //
  
  .table-sm {
    // stylelint-disable-next-line selector-max-universal
    > :not(caption) > * > * {
      padding: $table-cell-padding-y-sm $table-cell-padding-x-sm;
    }
  }
  
  
  // Border versions
  //
  // Add or remove borders all around the table and between all the columns.
  //
  // When borders are added on all sides of the cells, the corners can render odd when
  // these borders do not have the same color or if they are semi-transparent.
  // Therefor we add top and border bottoms to the `tr`s and left and right borders
  // to the `td`s or `th`s
  
  .table-bordered {
    > :not(caption) > * {
      border-width: $table-border-width 0;
  
      // stylelint-disable-next-line selector-max-universal
      > * {
        border-width: 0 $table-border-width;
      }
    }
  }
  
  .table-borderless {
    // stylelint-disable-next-line selector-max-universal
    > :not(caption) > * > * {
      border-bottom-width: 0;
    }
  
    > :not(:first-child) {
      border-top-width: 0;
    }
  }
  
  // Zebra-striping
  //
  // Default zebra-stripe styles (alternating gray and transparent backgrounds)
  
  // For rows
  .table-striped {
    > tbody > tr:nth-of-type(#{$table-striped-order}) > * {
      --#{$prefix}table-accent-bg: var(--#{$prefix}table-striped-bg);
      color: var(--#{$prefix}table-striped-color);
    }
  }
  
  // For columns
  .table-striped-columns {
    > :not(caption) > tr > :nth-child(#{$table-striped-columns-order}) {
      --#{$prefix}table-accent-bg: var(--#{$prefix}table-striped-bg);
      color: var(--#{$prefix}table-striped-color);
    }
  }
  
  // Active table
  //
  // The `.table-active` class can be added to highlight rows or cells
  
  .table-active {
    --#{$prefix}table-accent-bg: var(--#{$prefix}table-active-bg);
    color: var(--#{$prefix}table-active-color);
  }
  
  // Hover effect
  //
  // Placed here since it has to come after the potential zebra striping
  
  .table-hover {
    > tbody > tr:hover > * {
      --#{$prefix}table-accent-bg: var(--#{$prefix}table-hover-bg);
      color: var(--#{$prefix}table-hover-color);
    }
  }
  
  
  // Table variants
  //
  // Table variants set the table cell backgrounds, border colors
  // and the colors of the striped, hovered & active tables
  
  @each $color, $value in $table-variants {
    @include table-variant($color, $value);
  }
  
  // Responsive tables
  //
  // Generate series of `.table-responsive-*` classes for configuring the screen
  // size of where your table will overflow.
  
  @each $breakpoint in map-keys($grid-breakpoints) {
    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);
  
    @include media-breakpoint-down($breakpoint) {
      .table-responsive#{$infix} {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
      }
    }
  }
  
```
