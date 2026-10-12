# KodamaSoft

[![Netlify Status](https://api.netlify.com/api/v1/badges/f1d18fbb-7b34-4c31-80d7-a8bd3495ae05/deploy-status)](https://app.netlify.com/sites/kodamasoft/deploys)

# How to run

After running `npm install` and `npm run dev`, you can visit the blog at [http://localhost:3000/](http://localhost:3000/).

# Information editing guide

## Blogposts

To add a blogpost, create a new file in the `_posts` directory. The file should be named with the ID of your post. The file should start with the following header:

```yaml
---
title: 'KodamaDirect 2024'
date: '2024-03-30T18:00:00+0200'
locale: jp
author: Robin
public: true
twin: kodamadirect-2024
---
```

- `title` is the title of the post.
- `date` is the date and time of the post. (in ISO 8601 format)
- `locale` is the locale of the post.
- `author` is the author of the post.
- `public` is whether the post is public or not.
- `twin` is the twin post of the post. (if your post is a JP twin of an already existing EN post, you should put the ID of the EN post here, and vice versa)

The rest of the file is the content of the post. You can use MDX syntax to write the content of the post.
All posts are displayed in the homepage page in the order of their `date` field.

## KodamaSoft / Software listings

- To edit the page itself: `/pages/kodamasoft.page.js`
- To edit the listings: `/public/assets/games/releases.json`

## KodamaSounds / Discography

- To edit the page itself: `/pages/discography.page.js`
- To edit the listings: `/public/assets/discography/albums.json`

## Releases

All releases are listed in the `/_releases/` directory. Each release is a JSON file with the following structure:

```json
{
  "title": "KodamaDirect 2024",
  "date": "2024-03-30T18:00:00+0200",
  "locale": "jp",
  "author": "Robin",
  "public": true,
  "twin": "kodamadirect-2024",
  "content": "This is the content of the release."
}
```

## Projects & Project pages

- To edit the page itself: `/pages/projects.page.js`
- To edit the listings: `/public/assets/projects/projects.json`

### About said listings

The information in the listings is used to generate the links to the project pages, as well as the recap inside the project pages themselves.

The `projects.json` file is structured as follows:

```json
[
 {
  "cat_slug": "eclectic-resonance",
  "projects": [
   {
    "slug":"eclectic-resonance-legendaria",
    "status": "gen-open",
    "percentage": "0",
    "duration": "00:00",
    "finished_tracks": "0",
    "deadline": "2024-10-06T23:59:59Z",
    "mastering": {
     "status": "pending",
     "engineer": "R-Man (Resonant Union)"
    },
    "artwork_commission": "Pending",
    "color": "#d44215"
   },
            ...
        ]
    },
```

The file contains a list of categories.

- `cat_slug` is the ID of the category.
  - This ID is used to set the title and description of the category. They're set in `/locales/[lang]/projects.json`.
- `projects` is an array of projects.
  - `slug` is the ID of the project.
    - This ID is used to set the title and description of the project. They're set in `/locales/[lang]/projects.json` under their respective category.
  - `status` is the status of the project.
  - `percentage` is the percentage of completion of the project.
  - `duration` is the duration of the project.
  - `finished_tracks` is the number of finished tracks.
  - `deadline` is the deadline of the project.
  - `mastering` is the mastering information of the project.
    - `status` is the status of the mastering.
    - `engineer` is the mastering engineer.
  - `artwork_commission` is the status of the artwork commission.
  - `color` is the color of the project card.

### Project pages

Each project has its own page in the `/_projects/` directory. The file should be named with the ID of the project in the listings. The file should start with the following header:

```js
export const meta = {
    locale: 'jp',
    slug: 'eclectic-resonance-legendaria',
}
```

- `locale` is the locale of the project.
- `slug` is the ID of the project. This ID should match the one in the listings AND the filename.

The rest of the file is the content of the project page. You can use MDX syntax to write the content of the page.
Refer to the other pages in the directory for examples on how to add content, set deadlines, refer discography releases

## Staff

- To edit the page itself: `/pages/staff.page.js`
- To edit the listings: `/public/assets/staff/stafflist.json`
The `"_legacy": "true"` field is used to determine whether the staff member is displayed in the legacy section (bottom of the page) or not.
