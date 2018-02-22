{
  'targets': [
    {
      'target_name' : 'stall',
      'include_dirs': [ '<!(node -e "require(\'nan\')")' ],
      'sources': [ 'stall.cc' ]
    }
  ]
}
