# react-gh-corner
> React portals + Github corners + Styled component = 💘

# Demo 🍿

[https://zzarcon.github.io/react-gh-corner](https://zzarcon.github.io/react-gh-corner)

# Install 🚀

```
$ yarn add react-gh-corner
```

# Usage ⛏

**Basic** 

```tsx
import GHCorner from 'react-gh-corner';

<GHCorner href="https://github.com/zzarcon/react-gh-corner" />
```

**Custom**

```tsx
import GHCorner from 'react-gh-corner';

<GHCorner
  href="https://github.com/zzarcon/react-gh-corner"
  positon="top-right"
  bgColor="hotpink"
  size={250}
  ariaLabel="Check my project"
/>
```

# Api 📚

```ts
type CornerPosition = 'top-right' | 'top-left';

interface Props {
  href: string;
  position?: CornerPosition;
  bgColor?: string;
  size?: number;
  ariaLabel?: string;
}
```

See [example/](https://github.com/zzarcon/react-gh-corner/tree/master/example) for full example.
