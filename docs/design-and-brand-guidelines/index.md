---
title: Designs and Brand Guidelines
description: Afyra's official design system and brand identity.
---

<script setup>
import { withBase } from 'vitepress'
</script>

# Designs and Brand Guidelines

Afyra's visual identity brings together our logo, colors, typography, iconography, and interface components.

## Logo Usage

<div class="brand-section usage-section">
  <img :src="withBase('/afyra-logo-backgrounds.png')" alt="Logo usage examples" />
</div>

## Color Palette

<div class="brand-section palette-section">
  <img :src="withBase('/afyra-color-palette.png')" alt="Afyra color palette" />
</div>

## Typography

<div class="brand-section typography-section">
  <img :src="withBase('/afyra-typography.png')" alt="Afyra typography" />
</div>

## Iconography

<div class="brand-section icons-section">
  <img :src="withBase('/afyra-iconography.png')" alt="Afyra iconography" />
</div>

## Buttons

<div class="brand-section buttons-section">
  <img :src="withBase('/afyra-buttons.png')" alt="Afyra button styles" />
</div>

<style>
.brand-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0 32px;
  padding: 16px;
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
}
.brand-section img {
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: contain;
}
</style>
